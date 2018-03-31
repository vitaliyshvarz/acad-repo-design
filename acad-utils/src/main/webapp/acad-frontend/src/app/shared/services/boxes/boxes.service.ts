import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Models
import { Box } from './../../../models/box/box.model';

// Services
import { HttpService } from './../http/http.service';

@Injectable()
export class BoxesService {

  constructor(private readonly httpService: HttpService) { }

  getBox(schemaId: number, id: number): Observable<Box> {
    return this.httpService.get(`getBox/${schemaId}/${id}`);
  }

  saveBox(id: number, payload: Box): Observable<Box> {
    return this.httpService.post(`saveBox/${id}`, payload);
  }
}
