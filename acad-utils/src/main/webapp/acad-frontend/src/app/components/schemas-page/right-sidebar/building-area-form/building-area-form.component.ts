import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';

// Models
import { BuildingArea } from './../../../../models/building-area/building-area.model';

// Services
import { BuildingAreasService } from './../../../../shared/services/building-areas/building-areas.service';
import { SchemasService } from './../../../../shared/services/schemas/schemas.service';
import { UtilsService } from './../../../../shared/services/ulils/utils.service';

@Component({
  selector: 'app-building-area-form',
  templateUrl: './building-area-form.component.html',
  styles: [`
    .form {
      display: flex;
      flex-direction: column;
    }
  `]
})
export class BuildingAreaFormComponent implements OnChanges {
  @Input() buildingArea: BuildingArea;

  buildingAreaForm: FormGroup;

  colors; // al available colors

  constructor(
    private readonly utils: UtilsService,
    private readonly fb: FormBuilder,
    private readonly buildingAreasService: BuildingAreasService,
    private readonly schemasService: SchemasService,
  ) { }

  ngOnChanges() {
    this.colors = this.utils.getColors();

    const currentSchema = this.schemasService.schema.value;
    const MAX_X_POS = currentSchema.sizeX;
    const MAX_Y_POS = currentSchema.sizeY;
    const MAX_X_SIZE = currentSchema.sizeX;
    const MAX_Y_SIZE = currentSchema.sizeY;
    const MAX_Z_SIZE = currentSchema.sizeZ;

    this.buildingAreaForm = this.fb.group({
      name: [ this.buildingArea.name, Validators.compose([Validators.required, Validators.maxLength(50)]) ],
      description: [ this.buildingArea.description, Validators.maxLength(1000) ],
      mark: [ this.buildingArea.mark ],
      posX: [ this.buildingArea.posX, this.utils.createNumberValidator(0, MAX_X_POS) ],
      posY: [ this.buildingArea.posY, this.utils.createNumberValidator(0, MAX_Y_POS) ],
      sizeX: [ this.buildingArea.sizeX, this.utils.createNumberValidator(0, MAX_X_SIZE) ],
      sizeY: [ this.buildingArea.sizeY, this.utils.createNumberValidator(0, MAX_Y_SIZE) ],
      sizeZ: [ this.buildingArea.sizeZ, this.utils.createNumberValidator(0, MAX_Z_SIZE) ],
      bodyColor: [ this.buildingArea.bodyColor, Validators.required ],
      borderColor: [ this.buildingArea.borderColor, Validators.required ],
      solid: [ this.buildingArea.solid ]
    });
  }

  saveBuildingArea() {
    if (this.buildingAreaForm.valid) {
      const buildingAreaSubscription = this.buildingAreasService
        .saveBuildingArea(this.schemasService.schema.value.id, {...this.buildingArea, ...this.buildingAreaForm.value })
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
}
