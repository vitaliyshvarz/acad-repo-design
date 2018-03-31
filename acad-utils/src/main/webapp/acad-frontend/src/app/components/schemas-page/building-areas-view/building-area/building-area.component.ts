import {
  Component,
  Input,
} from '@angular/core';

import { BuildingArea } from './../../../../models/building-area/building-area.model';

@Component({
  selector: 'app-building-area-component',
  templateUrl: './building-area.component.html',
  styleUrls: ['./building-area.component.scss'],
})
export class BuildingAreaComponent {
  @Input() area: BuildingArea;
}
