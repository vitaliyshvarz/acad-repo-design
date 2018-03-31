import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Schema } from '../../../models/schema.model';
import { Box } from './../../../models/box/box.model';

import { SchemaBoxComponent } from './../schema-box/schema-box.component';
import { SchemasService } from './../../../shared/services/schemas/schemas.service';
import { DragHelperService, InteractType } from './../../../shared/services/drag-helper/drag-helper.service';

@Component({
  selector: 'app-schema-view-component',
  templateUrl: './schema-view.component.html',
  styleUrls: ['./schema-view.component.scss'],
})
export class SchemaViewComponent implements OnInit, OnDestroy {
  schema: Schema;
  boxes: Box[];

  sidebarProps: { key: string, value: any }[] = [];
  themeDark = false;

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private schemasService: SchemasService,
    private dragHelper: DragHelperService,
  ) { }

  ngOnInit() {
    this.schema = this.route.snapshot.data['schema'];

    Promise.all([
      this.schemasService.getSchemaBoxes(this.schema.id).toPromise(),
      this.schemasService.getSchemaBuildingAreas(this.schema.id).toPromise()
    ])
    .then(([boxes, areas]) => {
      this.boxes = boxes;
      this.createInteraction();
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  showClickedObjectProps(e) {
    this.sidebarProps = [];

    if (e.target.dataset.id) {
      const clickedBox = this.boxes.find((box) => +box.id === +e.target.dataset.id);
      this.sidebarProps = Object.keys(clickedBox).map((key) => ({key, value: clickedBox[key]}));
    }
  }

  saveBox() {
    if (this.sidebarProps.length) {
      const payload: Box = this.sidebarProps.reduce((obj, prop) => ({
        ...obj,
        [prop.key]: prop.value
      }), {} as Box);

      const subscription = this.schemasService.saveSchemaBox(payload.id, payload)
        .subscribe(() => {
          this.boxes = this.boxes.map((box) => box.id === payload.id ? payload : box);
          subscription.unsubscribe();
        });
    }
  }

  createInteraction() {
    this.dragHelper.createInteractOptions('.interactable-schema-box', InteractType.box);

    this.subscriptions.push(this.dragHelper
      .onDragEnd()
      .subscribe((params) => {
        if (params.id && params.type === InteractType.box) {
          const payload = { ...this.boxes.find((box) => box.id === params.id), posX: params.x, posY: params.y };

          const subsription = this.schemasService.saveSchemaBox(params.id, payload)
            .subscribe(() => {
              this.boxes = this.boxes.map((box) => box.id === payload.id ? payload : box);
              // trigger event to show synced box on sidebar after dragend
              this.showClickedObjectProps({ target: {dataset: {id: payload.id} }});
              subsription.unsubscribe();
            });
        }
      }));
  }
}
