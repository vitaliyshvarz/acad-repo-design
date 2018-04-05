import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models
import { Schema } from './../../../../models/schema.model';

// Services
import { SchemasService } from './../../../../shared/services/schemas/schemas.service';
import { UtilsService } from './../../../../shared/services/ulils/utils.service';

export const MAX_SCHEMA_SIZE = 10000;
export const MAX_SCHEMA_STEP = 100;

@Component({
  selector: 'app-schema-form',
  templateUrl: './schema-form.component.html',
  styles: [`
    .form {
      display: flex;
      flex-direction: column;
    }
  `]
})
export class SchemaFormComponent implements OnChanges {
  @Input() schema: Schema;

  schemaForm: FormGroup;

  constructor(
    private utils: UtilsService,
    private readonly schemasService: SchemasService,
    private readonly fb: FormBuilder,
  ) { }

  ngOnChanges() {
    this.schemaForm = this.fb.group({
      name: [ this.schema.name, Validators.compose([Validators.required, Validators.maxLength(50)]) ],
      sizeX: [ this.schema.sizeX, this.utils.createNumberValidator(0, MAX_SCHEMA_SIZE) ],
      sizeY: [ this.schema.sizeY, this.utils.createNumberValidator(0, MAX_SCHEMA_SIZE) ],
      sizeZ: [ this.schema.sizeZ, this.utils.createNumberValidator(0, MAX_SCHEMA_SIZE) ],
      gridStepX: [ this.schema.gridStepX, this.utils.createNumberValidator(0, MAX_SCHEMA_STEP) ],
      gridStepY: [ this.schema.gridStepY, this.utils.createNumberValidator(0, MAX_SCHEMA_STEP) ],
      disableDeleting: [ this.schema.disableDeleting ],
    });
  }

  saveSchema() {
    if (this.schemaForm.valid) {
      const schemaSubscription = this.schemasService
        .saveSchema(this.schema.id, {...this.schema, ...this.schemaForm.value })
        .subscribe((savedSchema) => {
          // update schema in service
          this.schemasService.schema.next(savedSchema);

          schemaSubscription.unsubscribe();
        });
    }
  }
}
