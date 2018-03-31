import {
  Component,
  Input,
} from '@angular/core';

import { Box } from './../../../../models/box/box.model';

@Component({
  selector: 'app-box-component',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent {
  @Input() box: Box;
}
