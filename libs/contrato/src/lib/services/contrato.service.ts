import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContratoPersonaVO, ContratoVO, LogBpmVO } from '@intercam/model';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor(public http: HttpClient) { }


  findContratosByClvPro(clvProm: string): Observable<any[]> {
    const urlStr = 'contrato/findContratos/' + clvProm;
    return this.http.get<any[]>(urlStr, {});
  }

  findFuncionarios(perId: string): Observable<any[]> {
    const urlStr = 'funcionario/find/' + perId;
    return this.http.get<any[]>(urlStr, {});
  }

  showlogBPM():Observable<LogBpmVO[]>{
    const urlStr ='logBPM/find-log';
    return this.http.get<LogBpmVO[]>(urlStr, {});
  }
  findPersonasContratoByperId(perId: number, perfil:string):Observable<ContratoPersonaVO[]> {
    const urlStr = 'contrato/findPersonasContratoByperId/' + perId + '/' + perfil;
    return this.http.get<ContratoPersonaVO[]>(urlStr, {});
  }

  reasignaContratosLegados(arrConEjecutivo:any[], tconId:number, clvPro:string): Observable<any[]> {
    const urlStr = 'prospeccion/reasignaContratosLegados';

    const requestOptions: Object = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: new HttpParams().set('usuId', tconId).set('clvPro', clvPro),
      responseType: 'text',
    };
    
    return this.http.post<any[]>(urlStr, JSON.stringify(arrConEjecutivo),requestOptions);
  }

  findContratosByCliIdTconIdEjeId(tconId: number, cliId: number,ejeId : number):Observable<ContratoVO[]>{
    const urlStr = 'contrato/findContratosByCliIdTconIdEjeId/'+tconId +'/'+ cliId +'/'+ ejeId;
    return this.http.get<ContratoVO[]>(urlStr,{});
  }
  /**
   * Obtiene la direccion de correo electronico del titular o apoderado
   * @param conId Identificador del contrato 
   * @returns cadena con el correo electronico
   */
  findEmailTitularApoderado(conId: number): Observable<any> {
    const urlStr = 'contrato/findEmailTitularApoderado';
    return this.http.get(urlStr, {params:{conId:conId}, responseType: 'text'});
  }

  getContrato(conId:number, tipoPersona:string): Observable<ContratoPersonaVO> {
    const urlStr = `contrato/get-contrato`;
    const params: Object = new Object({ 'conId': conId, 'tipoPersona': tipoPersona })
    return this.http.post<ContratoPersonaVO>(urlStr, params);
  }

  findRespuestasCuestionarioByCueFolio(cueFolio: number): Observable<any> {
    const urlStr = 'contrato/findcuefolio/' + cueFolio;
    return this.http.post<any>(urlStr, {});
  }

}
