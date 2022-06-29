import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstrumentoVO, MapeoDivisa, MesasOperacionVO, TipoCambioBitacoraVO } from '@intercam/model';
import {environment} from 'apps/ismart-pos/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BitacoraPreciosService {

  constructor(public http: HttpClient) { }

  getDivisas(): Observable<MapeoDivisa[]> {
    const urlStr = 'mapeo-divisa/remote/fill';
    return this.http.post<MapeoDivisa[]>(urlStr, []);
  }

  getCatalogoMesas(): Observable<MesasOperacionVO[]>{
    const urlStr = `${environment.URLServicePrice}preciosRemote/getMesasDivisas?tipoEsquema=TODAS`;
    return this.http.get<MesasOperacionVO[]>(urlStr,{});
  }

  getPerfilUsuario(clvPro: string, clvSuc: string): Observable<string>{
    const urlStr = `operacion-cambios/remote/getPerfil?clvPro=${clvPro}&clvSuc=${clvSuc}&tconId=5`;
    return this.http.get(urlStr, {
      responseType: 'text'
  });
  }

  getFechaActual():Observable<string>{
    const urlStr = 'seguridad/remote/getFechaActual';
    return this.http.get(urlStr,{
      responseType: 'text'
  });
  }

  getListInstrumentos(): Observable<InstrumentoVO[]>{
    const urlStr = 'instrumento/remote/fill';
    return this.http.post<InstrumentoVO[]>(urlStr,["instrumentos"]);
  }

  getBitacora(body: any):Observable<TipoCambioBitacoraVO[]>{
    const urlStr = 'operacion-cambios/remote/getBitacoraTipoCambio';
    return this.http.post<TipoCambioBitacoraVO[]>(urlStr,body);
  }
}