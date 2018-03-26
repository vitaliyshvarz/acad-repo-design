import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Box } from './../../../models/box/box.model';
import { InsideBox } from '../../../models/box/inside-box.model';
import { Schema } from './../../../models/schema.model';

import { HttpService } from './../http/http.service';

@Injectable()
export class SchemasService {

  constructor(
    private httpService: HttpService
  ) { }

  getSchema(id: number): Observable<Schema> {
    return this.httpService.get(`getSchema/${id}`);
  }

  saveSchema(id: number, payload: Schema): Observable<any> { // unknown response type yet
    return this.httpService.post(`saveSchema/${id}`, payload);
  }

  getBoxById(schemaId: number, id: number): Observable<Box> {
    return this.httpService.get(`getBox/${schemaId}/${id}`);
  }

  getSchemaBoxes(schemaId: number): Observable<Box[]> {
    return this.httpService.get(`getBoxes/${schemaId}`);
  }

  saveSchemaBox(id: number, payload: Box): Observable<any> { // unknown response type yet
    return this.httpService.post(`saveBox/${id}`, payload);
  }

  getSchemaInsideBoxes(schemaId: number): Observable<InsideBox[]> {
    return this.httpService.get(`getInsideBoxes/${schemaId}`);
  }

  saveSchemaInsideBox(id: number, payload: InsideBox): Observable<any> { // unknown response type yet
    return this.httpService.post(`saveInsideBox/${id}`, payload);
  }
}
