import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

// Models
import { Schema } from './../../../models/schema.model';
import { Box } from './../../../models/box/box.model';
import { BoxBase } from './../../../models/box/box-base.model';
import { BuildingArea } from './../../../models/building-area/building-area.model';
import { SidebarPropType, SidebarProps } from './../../../models/right-sidebar/right-sidebar-props.model';

// Services
import { BuildingAreasService } from './../../../shared/services/building-areas/building-areas.service';
import { BoxesService } from './../../../shared/services/boxes/boxes.service';
import { SchemasService } from './../../../shared/services/schemas/schemas.service';
import { RightSidebarService } from './../../../shared/services/right-sidebar/right-sidebar.service';

/**
 * All inputs from sidebar will be represented as a simple string inputs
 * to keep simple scaling of sidebar available objects
 */
@Component({
  selector: 'app-schema-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class SchemaRightSidebarComponent implements OnInit, OnDestroy {
  form: FormGroup;

  // current props names to iterate on template
  // important to keep them synced with form value keys
  sidebarProps: string[] = [];
  // type of object that represented on sidebar form
  sidebarPropsType: SidebarPropType;
  // current value of object which reporesented on sidebar form
  currentValue: Schema | Box | BuildingArea;

  private serviceSubscription: Subscription;

  constructor(
    private readonly fb: FormBuilder,
    private readonly sidebarService: RightSidebarService,
    private readonly schemasService: SchemasService,
    private readonly boxesService: BoxesService,
    private readonly buildingAreasService: BuildingAreasService,
  ) { }

  ngOnInit() {
    // subscribe for props change to stay up to date with clicked object from schema view
    this.serviceSubscription = this.sidebarService.getProps()
      .subscribe((props: SidebarProps) => {
        if (props.value) {
          // create form based on clicked object
          switch (props.type) {
            case SidebarPropType.schema:
              this.createSchemaForm(props.value as Schema);
              break;
            case SidebarPropType.box:
              this.createBoxForm(props.value as Box);
              break;
            case SidebarPropType.buildingArea:
              this.createBuildingAreaForm(props.value as BuildingArea);
              break;
            default:
              // reset form
              this.form = this.fb.group({});
              break;
          }

          this.currentValue = props.value;
          this.sidebarProps = Object.keys(this.form.value);
          this.sidebarPropsType = props.type;
        }
      });
  }

  ngOnDestroy() {
    // destroy subscription
    this.serviceSubscription.unsubscribe();
  }

  /**
   * @description
   * Based on current clicked object type performing API request to save object of type
   *
   * @memberof SchemaRightSidebarComponent
   */
  saveSidebarProps() {
    if (this.form.valid) {
      switch (this.sidebarPropsType) {
        case SidebarPropType.schema:
          this.saveSchema();
          break;
        case SidebarPropType.box:
          this.saveBox();
          break;
        case SidebarPropType.buildingArea:
          this.saveBuildingArea();
          break;
        default:
          this.form.markAsTouched();
          break;
      }
    }
  }

  private createSchemaForm(schema: Schema): void {
    this.form = this.fb.group({
      name: [ schema.name, Validators.required ],
      sizeX: [ schema.sizeX, Validators.required ],
      sizeY: [ schema.sizeY, Validators.required ],
      sizeZ: [ schema.sizeZ, Validators.required ],
      gridStepX: [ schema.gridStepX, Validators.required ],
      gridStepY: [ schema.gridStepY, Validators.required ],
      disableDeleting: [ schema.disableDeleting ],
    });
  }

  private createBoxForm(box: Box): void {
    this.form = this.fb.group({
      text: [ box.text, Validators.required ],
      posX: [ box.posX, Validators.required ],
      posY: [ box.posY, Validators.required ],
      sizeX: [ box.sizeX, Validators.required ],
      sizeY: [ box.sizeY, Validators.required ],
      sizeZ: [ box.sizeZ, Validators.required ],
      bodyColor: [ box.bodyColor, Validators.required ],
      borderColor: [ box.borderColor, Validators.required ],
      cols: [ box.cols, Validators.required ],
      keepArea: [ box.keepArea, Validators.required ],
      solid: [ box.solid, Validators.required ]
    });
  }

  private createBuildingAreaForm(area: BuildingArea): void {
    this.form = this.fb.group({
      name: [ area.name, Validators.required ],
      description: [ area.description, Validators.required ],
      mark: [ area.mark ],
      posX: [ area.posX, Validators.required ],
      posY: [ area.posY, Validators.required ],
      sizeX: [ area.sizeX, Validators.required ],
      sizeY: [ area.sizeY, Validators.required ],
      sizeZ: [ area.sizeZ, Validators.required ],
      bodyColor: [ area.bodyColor, Validators.required ],
      borderColor: [ area.borderColor, Validators.required ],
      solid: [ area.solid, Validators.required ]
    });
  }

  private saveSchema() {
    const schemaSubscription = this.schemasService
      .saveSchema(this.currentValue.id, {...this.currentValue, ...this.form.value } as Schema)
      .subscribe((savedSchema) => {
        // update schema in service
        this.schemasService.schema.next(savedSchema);

        schemaSubscription.unsubscribe();
      });
  }

  private saveBox() {
    const boxSubscription = this.boxesService
      .saveBox(this.currentValue.id, {...this.currentValue, ...this.form.value } as Box)
      .subscribe((savedBox) => {
        // merge existing boxes in service with updated boxes from response
        this.boxesService.boxes.next(this.boxesService.boxes.value.map(
          (box) => box.id === savedBox.id
            ? ({ ...box, ...savedBox })
            : box
          ));

        boxSubscription.unsubscribe();
      });
  }

  private saveBuildingArea() {
    const buildingAreaSubscription = this.buildingAreasService
      .saveBuildingArea(this.currentValue.id, {...this.currentValue, ...this.form.value } as BuildingArea)
      .subscribe((savedArea) => {
        // merge existing building areas in service with updated building area from response
        this.buildingAreasService.buildingAreas.next(this.buildingAreasService.buildingAreas.value.map(
          (area) => area.id === savedArea.id
            ? ({ ...area, ...savedArea })
            : area
          ));

        buildingAreaSubscription.unsubscribe();
      });
  }
}
