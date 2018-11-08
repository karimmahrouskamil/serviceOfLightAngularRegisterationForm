import { Injectable } from '@angular/core';
import {
  Observable,
  Subject,
  asapScheduler,
  pipe,
  of,
  from,
  interval,
  merge,
  fromEvent
} from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, filter, scan } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class MakhdouminServiceService {
  constructor(private http: HttpClient) {}

  createNewMakhdoum(makhdoumData: any): Observable<any>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>('http://localhost:8080/users/addUser', makhdoumData, httpOptions)
    .pipe(
      // catchError(this.handleError)
    ).catch(this.formatErrors);

  }
  private formatErrors(error: any) {
    return Observable.throw(error.json());
 }

}
