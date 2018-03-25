import {
  Component,
  Input,
  HostBinding,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  Renderer
} from '@angular/core';

import { Box } from './../../../models/box/box.model';

@Component({
  selector: 'app-schema-box-component',
  templateUrl: './schema-box.component.html',
  styleUrls: ['./schema-box.component.scss'],
})
export class SchemaBoxComponent implements OnChanges {
  @Input() box: Box;

  @HostBinding('style.left.px') left = 0;
  @HostBinding('style.top.px') top = 0;

  @ViewChild('boxRef') boxRef: ElementRef;

  constructor(private renderer: Renderer) { }

  ngOnChanges(changes: SimpleChanges) {
    this.left = this.box.posX;
    this.top = this.box.posY;

    if (changes.box.currentValue) {
      this.renderer.setElementAttribute(
        this.boxRef.nativeElement,
        'data-item',
        JSON.stringify(changes.box.currentValue)
      );
    }
  }
}
