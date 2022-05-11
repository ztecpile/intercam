import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContratoEstatusVO, DivisionContratoVO, PerfilVO, TipoContratoVO } from '@intercam/model';

@Injectable({
  providedIn: 'root'
})
export class CatContratoService {

  constructor(public http: HttpClient) { }

  findTipoContrato(): Observable<TipoContratoVO[]> {
    const urlStr = 'cat-contrato/find/tipo-contrato' ;
    return this.http.get<TipoContratoVO[]>(urlStr, {});
  }

  getHost():Observable<string>{
    const urlStr = 'cat-contrato/find-host' ;
    return this.http.get(urlStr, {
        responseType: 'text'
    });
  }

  findTipoContratoById(id: number): Observable<TipoContratoVO> {
    const urlStr = 'cat-contrato/findTipoContratoById' ;
    return this.http.get<TipoContratoVO>(urlStr, {});
  }

  findPerfilById(perfId: number): Observable<PerfilVO> {
    const urlStr = 'cat-contrato/findPerfilById/' + perfId;
    return this.http.get<PerfilVO>(urlStr, {});
  }

  findAllDivisionContrato(): Observable<DivisionContratoVO[]> {
    const urlStr = 'cat-contrato/find-all/division-contrato';
    return this.http.get<DivisionContratoVO[]>(urlStr, {});
  }

  getAllContratoEstatus(): Observable<ContratoEstatusVO[]> {
    const urlStr = 'cat-contrato/find-all/contrato-estatus';
    return this.http.get<ContratoEstatusVO[]>(urlStr, {});
  }
}