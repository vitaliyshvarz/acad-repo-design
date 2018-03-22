import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Schema } from '../../models/schema.model';

import { SchemasService } from './../../shared/services/schemas/schemas.service';

@Component({
  selector: 'app-schema-component',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.scss']
})
export class SchemaComponent implements OnInit, OnDestroy {

  currentSchema: Schema;

  private subscriptions = new Subscription();

  constructor(
    private readonly schemasService: SchemasService
  ) { }

  ngOnInit() {
    this.subscriptions.add(this.schemasService
      .getSchema(1)
      .subscribe((schema: Schema) => {
        this.currentSchema = schema;
      }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
