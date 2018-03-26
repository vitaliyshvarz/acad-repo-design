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

  sidebarProps: { key: string, value: any }[];
  themeDark = false;

  private subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private schemasService: SchemasService,
    private dragHelper: DragHelperService,
  ) { }

  ngOnInit() {
    this.schema = this.route.snapshot.data['schema'];

    const schemaSubscription = this.schemasService.getSchemaBoxes(this.route.snapshot.data['schema'].id)
      .subscribe((responseBoxes: Box[]) => {
        this.boxes = responseBoxes;
        this.createInteraction();

        schemaSubscription.unsubscribe();
      });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  showClickedObjectProps(e) {
    this.sidebarProps = [];

    if (e.target.dataset.id) {
      const clickedBox = this.boxes.find((box) => +box.id === +e.target.dataset.id);

      this.sidebarProps = Object.keys(clickedBox).map((key) => ({key, value: clickedBox[key]}));
    }
  }

  createInteraction() {
    this.dragHelper.createInteractOptions('.interactable-schema-box', InteractType.box);

    this.subscriptions.add(this.dragHelper.dragEnd$.subscribe((params) => {
      if (params.id && params.type === InteractType.box) {
        const payload = {
          ...this.boxes.find((box) => box.id === params.id),
          posX: params.x,
          posY: params.y
        };

        const subsription = this.schemasService.saveSchemaBox(params.id, payload)
          .subscribe(() => {
            this.boxes = this.boxes.map((box) => box.id === payload.id ? payload : box);
            subsription.unsubscribe();
          });
      }
    }));
  }
}
