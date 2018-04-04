// Platform imports
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// Models
import { BuildingArea } from './../../../models/building-area/building-area.model';
import { SidebarPropType } from '../../../models/right-sidebar/right-sidebar-props.model';
import { DragCallbackProps } from './../../../shared/services/drag-helper/drag-helper.service';

// Services
import { BuildingAreasService } from './../../../shared/services/building-areas/building-areas.service';
import { DragHelperService, InteractType } from './../../../shared/services/drag-helper/drag-helper.service';
import { RightSidebarService } from './../../../shared/services/right-sidebar/right-sidebar.service';
import { SchemasService } from './../../../shared/services/schemas/schemas.service';

/**
 * @description
 * This component should take care about CRUD boxes options
 */
@Component({
  selector: 'app-building-areas-view',
  template: `
  <app-building-area-component
    *ngFor="let area of buildingAreas"
    (click)="showAreaOnSidebar(area)"
    [area]="area"
    [attr.data-id]="area.id"
    [style.left.px]="area.posX"
    [style.top.px]="area.posY"
    class="interactable-schema-area"
  ></app-building-area-component>
  `,
  styles: [`
    :host {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
  `]
})
export class BuildingAreasViewComponent implements OnInit {
  @Input() buildingAreas: BuildingArea[] = [];

  private subscriptions: Subscription[] = [];

  constructor(
    private readonly buildingAreasService: BuildingAreasService,
    private readonly dragHelper: DragHelperService,
    private readonly rhsService: RightSidebarService,
    private readonly schemasService: SchemasService,
  ) { }

  ngOnInit() {
    this.dragHelper.createInteractOptions('.interactable-schema-area', InteractType.buildingArea);

    this.subscriptions.push(this.dragHelper
      .onDragEnd()
      .subscribe((params: DragCallbackProps) => this.dragEndCallback(params)));
  }

  /**
   * @description
   * Drop next props to sidebar to create form based on object type and value
   *
   * @param area area that will available to edit on sidebar form
   *
   * @memberof BuildingAreasViewComponent
   */
  showAreaOnSidebar(area: BuildingArea): void {
    this.rhsService.nextProps({
      type: SidebarPropType.buildingArea,
      value: area
    });
  }

  /**
   * @description
   * Updates positions X and Y on server as during drag-n-drop
   * we can update only positioning props
   *
   * @param params type, coordinates and id of object that will be saved
   *
   * @memberof BuildingAreasViewComponent
   */
  dragEndCallback(params: DragCallbackProps): void {
    if (params.id && params.type === InteractType.buildingArea) {
      // find building area of that id in storage and assign him new position
      const payload: BuildingArea = {
        ...this.buildingAreasService.buildingAreas.value.find((area) => area.id === params.id),
        posX: params.x,
        posY: params.y
      };

      // perform request to save updated building area
      const subsription = this.buildingAreasService
        .saveBuildingArea(this.schemasService.schema.value.id, payload)
        .subscribe((savedArea: BuildingArea) => {
          // sync service stored objects with API response
          this.buildingAreasService.buildingAreas.next(
            this.buildingAreas.map((box) => box.id === savedArea.id ? savedArea : box)
          );

          // trigger event to show synced box on sidebar after dragend
          this.rhsService.nextProps({
            type: SidebarPropType.buildingArea,
            value: savedArea
          });

          subsription.unsubscribe();
        });
    }
  }
}
