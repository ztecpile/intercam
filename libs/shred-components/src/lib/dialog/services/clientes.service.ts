import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientenVO, ConsultaSaldoVO } from '@intercam/model';


@Injectable({
    providedIn: 'root'
})


export class ClienteService {

    constructor(public http: HttpClient) { }
    findConsultaSaldoVO(cuenta:string,usuClave:string): Observable<ConsultaSaldoVO> {
        const urlStr = 'saldo-edo-cta/remote/consultaSaldo?numeroCuenta='+cuenta+'&usuClave='+usuClave;
        return this.http.get<ConsultaSaldoVO>(urlStr, {});
      }
  


}