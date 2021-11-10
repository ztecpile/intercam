import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaContService {

  constructor(public http: HttpClient) { }

  fill(fillParameters:any[]): Observable<any[]> {
    const urlStr = 'personaCont/fill';
    return this.http.post<any[]>(urlStr, fillParameters);
  }
}