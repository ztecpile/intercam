import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoContratoVO } from '@intercam/model';

@Injectable({
  providedIn: 'root'
})
export class CatContratoService {

  constructor(public http: HttpClient) { }

  findTipoContrato(): Observable<TipoContratoVO[]> {
    const urlStr = 'cat-contrato/find/tipo-contrato' ;
    return this.http.get<TipoContratoVO[]>(urlStr, {});
  }
}