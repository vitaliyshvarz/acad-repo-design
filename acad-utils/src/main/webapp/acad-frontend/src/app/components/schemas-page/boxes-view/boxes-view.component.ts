// Platform imports
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// Models
import { Box } from './../../../models/box/box.model';
import { SidebarPropType } from './../../../models/right-sidebar/right-sidebar-props.model';
import { DragCallbackProps } from './../../../shared/services/drag-helper/drag-helper.service';

// Services
import { BoxesService } from './../../../shared/services/boxes/boxes.service';
import { DragHelperService, InteractType } from './../../../shared/services/drag-helper/drag-helper.service';
import { RightSidebarService } from './../../../shared/services/right-sidebar/right-sidebar.service';
import { SchemasService } from './../../../shared/services/schemas/schemas.service';

@Component({
  selector: 'app-boxes-view',
  template: `
    <app-box-component
      *ngFor="let box of boxes"
      (click)="showBoxOnSidebar(box)"
      [box]="box"
      [attr.data-id]="box.id"
      [style.left.px]="box.posX"
      [style.top.px]="box.posY"
      class="interactable-schema-box"
    ></app-box-component>
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
export class BoxesViewComponent implements OnInit {
  @Input() boxes: Box[] = [];

  subscriptions: Subscription[] = [];

  constructor(
    private readonly boxesService: BoxesService,
    private readonly dragHelper: DragHelperService,
    private readonly rhsService: RightSidebarService,
    private readonly schemasService: SchemasService,
  ) { }

  ngOnInit() {
    this.createBoxInteraction();
  }

  showBoxOnSidebar(box: Box): void {
    this.rhsService.nextProps({
      type: SidebarPropType.box,
      value: box
    });
  }

  createBoxInteraction(): void {
    this.dragHelper.createInteractOptions('.interactable-schema-box', InteractType.box);

    this.subscriptions.push(this.dragHelper
      .onDragEnd()
      .subscribe((params: DragCallbackProps) => this.dragEndCallback(params)));
  }

  dragEndCallback(params: DragCallbackProps): void {
    if (params.id && params.type === InteractType.box) {
      const payload = {
        ...this.boxesService.boxes.value.find((box) => box.id === params.id),
        posX: params.x,
        posY: params.y
      };

      const subsription = this.boxesService.saveBox(this.schemasService.schema.value.id, payload)
        .subscribe((savedBox) => {
          this.boxesService.boxes.next(
            this.boxes.map((box) => box.id === savedBox.id ? savedBox : box)
          );
          this.rhsService.nextProps({
            type: SidebarPropType.box,
            value: savedBox
          });
          subsription.unsubscribe();
        });
    }
  }
}
