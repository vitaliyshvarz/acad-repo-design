import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

// Models
import { Schema } from './../../../models/schema.model';
import { Box } from './../../../models/box/box.model';
import { BoxBase } from './../../../models/box/box-base.model';
import { BuildingArea } from './../../../models/building-area/building-area.model';
import { SidebarPropType } from './../../../models/right-sidebar/right-sidebar-props.model';

// Services
import { BuildingAreasService } from './../../../shared/services/building-areas/building-areas.service';
import { BoxesService } from './../../../shared/services/boxes/boxes.service';
import { SchemasService } from './../../../shared/services/schemas/schemas.service';
import { RightSidebarService } from './../../../shared/services/right-sidebar/right-sidebar.service';

/**
 * all inputs will be as a simple string inputs
 */
@Component({
  selector: 'app-schema-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class SchemaRightSidebarComponent implements OnInit, OnDestroy {
  form: FormGroup;
  sidebarProps: string[] = [];
  sidebarPropsType: SidebarPropType;

  currentValue: Schema | Box | BuildingArea;

  private serviceSubscription: Subscription;

  constructor(
    private readonly fb: FormBuilder,
    private readonly sidebarService: RightSidebarService,
    private readonly schemasService: SchemasService,
    private readonly boxesService: BoxesService,
    private readonly buildingAreasService: BuildingAreasService,
  ) { }

  public ngOnInit() {
    this.serviceSubscription = this.sidebarService.getProps()
      .subscribe((props) => {
        this.sidebarPropsType = props.type;

        switch (props.type) {
          case SidebarPropType.schema:
            this.createSchemaForm(props.value);
            break;
          case SidebarPropType.box:
            this.createBoxForm(props.value);
            break;
          case SidebarPropType.buildingArea:
            this.createBuildingAreaForm(props.value);
            break;
          default:
            this.form = this.fb.group({});
            break;
        }
      });
  }

  public ngOnDestroy() {
    this.serviceSubscription.unsubscribe();
  }

  public saveSidebarProps() {
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

    this.currentValue = schema;
    this.assignSidebarProps();
  }

  private createBoxForm(box: Box): void {
    this.form = this.fb.group({
      text: [ box.text, Validators.required ],
      sizeX: [ box.sizeX, Validators.required ],
      sizeY: [ box.sizeY, Validators.required ],
      sizeZ: [ box.sizeZ, Validators.required ],
      bodyColor: [ box.bodyColor, Validators.required ],
      borderColor: [ box.borderColor, Validators.required ],
      cols: [ box.cols, Validators.required ],
      keepArea: [ box.keepArea, Validators.required ],
      solid: [ box.solid, Validators.required ]
    });

    this.currentValue = box;
    this.assignSidebarProps();
  }

  private createBuildingAreaForm(area: BuildingArea): void {
    this.form = this.fb.group({
      name: [ area.name, Validators.required ],
      description: [ area.description, Validators.required ],
      mark: [ area.mark ],
      sizeX: [ area.sizeX, Validators.required ],
      sizeY: [ area.sizeY, Validators.required ],
      sizeZ: [ area.sizeZ, Validators.required ],
      bodyColor: [ area.bodyColor, Validators.required ],
      borderColor: [ area.borderColor, Validators.required ],
      solid: [ area.solid, Validators.required ]
    });

    this.currentValue = area;
    this.assignSidebarProps();
  }

  private saveSchema() {
    const schemaSub = this.schemasService
      .saveSchema(this.currentValue.id, {...this.currentValue, ...this.form.value } as Schema)
      .subscribe((savedSchema) => {
        this.schemasService.schema.next(savedSchema);
        schemaSub.unsubscribe();
      });
  }

  private saveBox() {
    const boxSub = this.boxesService
      .saveBox(this.currentValue.id, {...this.currentValue, ...this.form.value } as Box)
      .subscribe((savedBox) => {
        this.boxesService.boxes.next(this.boxesService.boxes.value.map(
          (box) => box.id === savedBox.id
            ? ({ ...box, ...savedBox })
            : box
          ));
        boxSub.unsubscribe();
      });
  }

  private saveBuildingArea() {
    const areaSub = this.buildingAreasService
      .saveBuildingArea(this.currentValue.id, {...this.currentValue, ...this.form.value } as BuildingArea)
      .subscribe((savedArea) => {
        this.buildingAreasService.buildingAreas.next(this.buildingAreasService.buildingAreas.value.map(
          (area) => area.id === savedArea.id
            ? ({ ...area, ...savedArea })
            : area
          ));
        areaSub.unsubscribe();
      });
  }

  private assignSidebarProps() {
    this.sidebarProps = Object.keys(this.form.value);
  }
}
