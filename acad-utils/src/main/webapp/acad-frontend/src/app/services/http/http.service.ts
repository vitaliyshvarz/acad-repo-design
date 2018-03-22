import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { environment } from './../../../environments/environment';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  get(endpoint: string, options = {}): Observable<Object> {
    return this.http.get(`${environment.apiUrl}/${endpoint}`, options);
  }

  post(endpoint: string, payload: any, options = {}): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/${endpoint}`, payload, options);
  }
}
