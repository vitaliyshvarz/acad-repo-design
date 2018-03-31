// Platform imports
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// Models
import { Box } from './../../../models/box/box.model';

// Services
import { BoxesService } from './../../../shared/services/boxes/boxes.service';
import { DragHelperService, InteractType } from './../../../shared/services/drag-helper/drag-helper.service';

@Component({
  selector: 'app-boxes-view',
  template: `
    <app-box-component
      *ngFor="let box of boxes"
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

  public sidebarProps: { key: string, value: any }[] = [];

  private subscriptions: Subscription[] = [];

  constructor(
    private readonly boxesService: BoxesService,
    private readonly dragHelper: DragHelperService
  ) { }

  public ngOnInit() {
    this.createBoxInteraction();
  }

  public saveBox() {
    if (this.sidebarProps.length) {
      const payload: Box = this.sidebarProps.reduce(
        (obj, prop) => ({ ...obj, [prop.key]: prop.value }),
        { } as Box
      );

      const subscription = this.boxesService
        .saveBox(payload.id, payload)
        .subscribe((updatedBox: Box) => {
          this.boxes = this.boxes.map((box) => box.id === updatedBox.id ? updatedBox : box);
          subscription.unsubscribe();
        });
    }
  }

  public createBoxInteraction() {
    this.dragHelper.createInteractOptions('.interactable-schema-box', InteractType.box);

    this.subscriptions.push(this.dragHelper
      .onDragEnd()
      .subscribe((params) => this.dragEndCallback(params)));
  }

  private dragEndCallback(params) {
    if (params.id && params.type === InteractType.box) {
      const payload = {
        ...this.boxes.find((box) => box.id === params.id),
        posX: params.x,
        posY: params.y
      };

      const subsription = this.boxesService.saveBox(params.id, payload)
        .subscribe(() => {
          this.boxes = this.boxes.map((box) => box.id === payload.id ? payload : box);
          // trigger event to show synced box on sidebar after dragend
          // this.showClickedObjectProps({ target: {dataset: {id: payload.id} }});
          subsription.unsubscribe();
        });
    }
  }
}
