import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonaContratoVO } from '@intercam/model';

@Injectable({
  providedIn: 'root'
})
export class PersonaContService {

  constructor(public http: HttpClient) { }

  fill(fillParameters:any[]): Observable<any[]> {
    const urlStr = 'personaCont/fill';
    return this.http.post<any[]>(urlStr, fillParameters);
  }

  findPersonaProspecto(filtro: PersonaContratoVO): Observable<PersonaContratoVO[]> {
    const urlStr = 'personaCont/findPersonaProspecto';
    return this.http.post<PersonaContratoVO[]>(urlStr, filtro);
  }
}