import {
  Component,
  Input,
} from '@angular/core';

import { Box } from './../../../models/box/box.model';

@Component({
  selector: 'app-schema-box-component',
  templateUrl: './schema-box.component.html',
  styleUrls: ['./schema-box.component.scss'],
})
export class SchemaBoxComponent {
  @Input() box: Box;
}
