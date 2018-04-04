import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Models
import { Box } from './../../../models/box/box.model';

// Services
import { HttpService } from './../http/http.service';

@Injectable()
export class BoxesService {
  boxes: BehaviorSubject<Box[]> = new BehaviorSubject([]);

  constructor(private readonly httpService: HttpService) { }

  /**
   * @description
   * Performs a GET request for box item related to specific schema
   *
   * @param schemaId id of related schema
   * @param id id of box that will be returned
   * @returns Observable with box item
   *
   * @memberof BoxesService
   */
  getBox(schemaId: number, id: number): Observable<Box> {
    return this.httpService.get(`getBox/${schemaId}/${id}`);
  }

  /**
   * @description
   * Perfors a POST request that updates box item
   *
   * @param schemaId id of Schema related to box that will be saved
   * @param payload box that will be saved
   *
   * @returns Observable with updated box data
   *
   * @memberof BoxesService
   */
  saveBox(schemaId: number, payload: Box): Observable<Box> {
    return this.httpService.post(`saveBox/${schemaId}`, payload);
  }
}
