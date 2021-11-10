import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(public http: HttpClient) { }

  findPerfiles(): Observable<Object> {
    const urlStr = 'persona/findPerfiles';
    return this.http.get<Object>(urlStr, {});
  }
}
