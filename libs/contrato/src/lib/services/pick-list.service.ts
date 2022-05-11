import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PickListService {

  constructor(public http: HttpClient) { }

  fill(fillParameters:any[]): Observable<any[]> {
    const urlStr = 'pick-list/fill';
    return this.http.post<any[]>(urlStr, fillParameters);
  }
}