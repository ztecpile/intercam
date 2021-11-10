import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SolicitudReferenciacionVO } from '@intercam/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferenciacionService {

  constructor(private http: HttpClient) { }

  notificarDuenioCliente(solicitudReferenciacionVO:SolicitudReferenciacionVO): Observable<SolicitudReferenciacionVO> {
    const urlStr = 'referenciacion/notificarDuenioCliente';
    return this.http.post<SolicitudReferenciacionVO>(urlStr, solicitudReferenciacionVO);
  }
   
  validaExisteSolicitud(perIdSolicita :number,perIdCliente : number,tconId : number,edoRef : number){
    const urlStr = 'referenciacion/validaExisteSolicitud' + '/' + perIdSolicita + '/' + perIdCliente + '/' +tconId +'/' + edoRef;
    return this.http.get<SolicitudReferenciacionVO>(urlStr,{});
  }
}