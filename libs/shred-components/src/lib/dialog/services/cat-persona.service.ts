import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChTiposVO } from '@intercam/model';

@Injectable({
  providedIn: 'root'
})
export class CatPersonaService {

  constructor(public http: HttpClient) { }

  getAllTiposCuenta(): Observable<ChTiposVO[]> {
    const urlStr = 'catalogo/persona/getAllTiposCuenta' ;
    return this.http.get<ChTiposVO[]>(urlStr, {});
  }
}