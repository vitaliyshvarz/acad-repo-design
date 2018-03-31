import { BuildingArea } from './../../../models/building-area/building-area.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Schema } from '../../../models/schema.model';
import { Box } from './../../../models/box/box.model';

import { SchemasService } from './../../../shared/services/schemas/schemas.service';

@Component({
  selector: 'app-schema-view-component',
  templateUrl: './schema-view.component.html',
  styleUrls: ['./schema-view.component.scss'],
})
export class SchemaViewComponent implements OnInit, OnDestroy {
  schema: Schema;
  boxes: Box[] = [];
  buildingAreas: BuildingArea[] = [];

  sidebarProps: { key: string, value: any }[] = [];

  private subscriptions: Subscription[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly schemasService: SchemasService,
  ) { }

  ngOnInit() {
    this.schema = this.route.snapshot.data['schema'];

    Promise.all([
      this.schemasService.getSchemaBoxes(this.schema.id).toPromise(),
      this.schemasService.getSchemaBuildingAreas(this.schema.id).toPromise()
    ])
    .then(([boxes, areas]) => {
      this.buildingAreas = areas;
      this.boxes = boxes;
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
}
