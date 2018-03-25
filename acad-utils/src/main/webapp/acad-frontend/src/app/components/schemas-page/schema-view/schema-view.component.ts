import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Schema } from '../../../models/schema.model';
import { Box } from './../../../models/box/box.model';

import { SchemasService } from './../../../shared/services/schemas/schemas.service';

@Component({
  selector: 'app-schema-view-component',
  templateUrl: './schema-view.component.html',
  styleUrls: ['./schema-view.component.scss'],
})
export class SchemaViewComponent implements OnInit {
  schema: Schema;
  boxes$: Observable<Box[]>;

  sidebarProps: { key: string, value: any }[];
  themeDark = false;

  constructor(
    private route: ActivatedRoute,
    private schemasService: SchemasService
  ) { }

  ngOnInit() {
    this.schema = this.route.snapshot.data['schema'];

    this.boxes$ = this.schemasService
      .getSchemaBoxes(this.route.snapshot.data['schema'].id);
  }

  showClicedObjectProps(e) {
    this.sidebarProps = [];

    if (e.target.dataset.item) {
      const dataObject = JSON.parse(e.target.dataset.item);

      this.sidebarProps = Object.keys(dataObject).map((key) => ({key, value: dataObject[key]}));
    }
  }
}
