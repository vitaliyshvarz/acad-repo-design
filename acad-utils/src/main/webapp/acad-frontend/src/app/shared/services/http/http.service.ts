import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { environment } from './../../../../environments/environment';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  /**
   * @description
   * Performs GET request
   *
   * @param endpoint API endpoint
   * @param options request options args
   * @returns Oobservable to handle API response
   *
   * @memberof HttpService
   */
  get(endpoint: string, options = {}): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/${endpoint}`, options);
  }

  /**
   * @description
   * Performs POST request
   *
   * @param endpoint API endpoint
   * @param payload request body
   * @param options request options args
   * @returns Oobservable to handle API response
   *
   * @memberof HttpService
   */
  post(endpoint: string, payload: any, options = {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/${endpoint}`, payload, options);
  }
}
