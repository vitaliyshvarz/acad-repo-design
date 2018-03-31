import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Models
import { Box } from './../../../models/box/box.model';
import { Schema } from './../../../models/schema.model';
import { BuildingArea } from './../../../models/building-area/building-area.model';

// Services
import { HttpService } from './../http/http.service';

@Injectable()
export class SchemasService {
  public schema: BehaviorSubject<Schema>;

  constructor(private readonly httpService: HttpService) { }

  getSchema(id: number): Observable<Schema> {
    return this.httpService.get(`getSchema/${id}`);
  }

  saveSchema(id: number, payload: Schema): Observable<Schema> {
    return this.httpService.post(`saveSchema/${id}`, payload);
  }

  getSchemaBoxes(schemaId: number): Observable<Box[]> {
    return this.httpService.get(`getBoxes/${schemaId}`);
  }

  getSchemaBuildingAreas(schemaId: number): Observable<BuildingArea[]> {
    return this.httpService.get(`getBuildingAreas/${schemaId}`);
  }
}
