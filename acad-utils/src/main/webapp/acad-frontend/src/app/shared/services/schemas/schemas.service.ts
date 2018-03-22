import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Schema } from './../../../models/schema.model';

import { HttpService } from './../http/http.service';

@Injectable()
export class SchemasService {

  constructor(
    private httpService: HttpService
  ) { }

  getSchema(schemaId: number): Observable<Schema> {
    return this.httpService.get(`getSchema/${schemaId}`);
  }
}
