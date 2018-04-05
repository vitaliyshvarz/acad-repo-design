import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models
import { Box } from './../../../../models/box/box.model';

// Services
import { UtilsService } from './../../../../shared/services/ulils/utils.service';
import { BoxesService } from './../../../../shared/services/boxes/boxes.service';
import { SchemasService } from './../../../../shared/services/schemas/schemas.service';

@Component({
  selector: 'app-box-form',
  templateUrl: './box-form.component.html',
  styles: [`
    .form {
      display: flex;
      flex-direction: column;
    }
  `]
})
export class BoxFormComponent implements OnChanges {
  @Input() box: Box;

  boxForm: FormGroup;

  colors; // al available colors

  constructor(
    private readonly utils: UtilsService,
    private readonly fb: FormBuilder,
    private readonly boxesService: BoxesService,
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


    this.boxForm = this.fb.group({
      text: [ this.box.text, Validators.compose([Validators.required, Validators.maxLength(50)]) ],
      posX: [ this.box.posX, this.utils.createNumberValidator(0, MAX_X_POS) ],
      posY: [ this.box.posY, this.utils.createNumberValidator(0, MAX_Y_POS) ],
      sizeX: [ this.box.sizeX, this.utils.createNumberValidator(0, MAX_X_SIZE) ],
      sizeY: [ this.box.sizeY, this.utils.createNumberValidator(0, MAX_Y_SIZE) ],
      sizeZ: [ this.box.sizeZ, this.utils.createNumberValidator(0, MAX_Z_SIZE) ],
      bodyColor: [ this.box.bodyColor, Validators.required ],
      borderColor: [ this.box.borderColor, Validators.required ],
      cols: [ this.box.cols, Validators.required ],
      keepArea: [ this.box.keepArea ],
      solid: [ this.box.solid ]
    });
  }

  saveBox() {
    if (this.boxForm.valid) {
      const boxSubscription = this.boxesService
        .saveBox(this.schemasService.schema.value.id, {...this.box, ...this.boxForm.value })
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
  }
}
