import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SchemasService } from './../../schemas/schemas.service';

import { Schema } from './../../../../models/schema.model';

@Injectable()
export class SchemaResolver implements Resolve<Schema> {

  constructor(
    private readonly schemasService: SchemasService
  ) { }

  /**
   * @description
   * Resolves schema item before route is loaded
   *
   * @param route resolved route
   * @returns Observable with schema item data
   *
   * @memberof SchemaResolver
   */
  resolve(route: ActivatedRouteSnapshot): Observable<Schema> {
    return this.schemasService.getSchema(route.params.id);
  }
}
