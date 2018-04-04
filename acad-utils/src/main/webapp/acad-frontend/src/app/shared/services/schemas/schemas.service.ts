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
  schema: BehaviorSubject<Schema>;

  constructor(private readonly httpService: HttpService) { }

  /**
   * @description
   * Performs a GET request for Schema item
   * @param id id of requested schema
   * @returns Observable with schema item
   *
   * @memberof SchemasService
   */
  getSchema(id: number): Observable<Schema> {
    return this.httpService.get(`getSchema/${id}`);
  }

  /**
   * @description
   * Performs a POST request to update schema item
   *
   * @param id id of schema that will be saved
   * @param payload new schema properties that will be saved
   * @returns Observable with updated schema item
   *
   * @memberof SchemasService
   */
  saveSchema(id: number, payload: Schema): Observable<Schema> {
    return this.httpService.post(`saveSchema/${id}`, payload);
  }

  /**
   * @description
   * Performs a GET request for box items related to schema
   *
   * @param id id of related schema
   * @returns Observable with box items related to schema
   *
   * @memberof SchemasService
   */
  getSchemaBoxes(schemaId: number): Observable<Box[]> {
    return this.httpService.get(`getBoxes/${schemaId}`);
  }

  /**
   * @description
   * Performs a GET request for building area items related to schema
   *
   * @param id id of related schema
   * @returns Observable with building area items related to schema
   *
   * @memberof SchemasService
   */
  getSchemaBuildingAreas(schemaId: number): Observable<BuildingArea[]> {
    return this.httpService.get(`getBuildingAreas/${schemaId}`);
  }
}
