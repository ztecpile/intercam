import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CampaignContratoMasterVO, CampaignContratoVO, CampaignDetailVO, CategPersonaVO, ContratoEjecutivoVO, ContratoFolderFondosVO, ContratoPersonaVO, ContratoVO, CuentaContratoVO, LogBpmVO, PerfilVO, PersonaRiesgoVO, ProspeccionPersonaVO } from '@intercam/model';

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
  
  getcontratoFByBitPen(conId: number): Observable<ContratoFolderFondosVO>{
    const urlStr = `contrato/getcontratoFByBitPen?conId=${conId}`;
    return this.http.get<ContratoFolderFondosVO>(urlStr, {});
  }

  findContratoEjecutivoCertificadoByConId(conId: number): Observable<ContratoEjecutivoVO> {
    const urlStr = 'contrato/findContratoEjecutivoCertificadoByConId/' + conId;
    return this.http.get<ContratoEjecutivoVO>(urlStr, {});
  }

  findContratoEjecutivoByConId(conId: number): Observable<ContratoEjecutivoVO> {
    const urlStr = `contrato/findContratoEjecutivoByConId?conId=${conId}`;
    return this.http.get<ContratoEjecutivoVO>(urlStr, {});
  }

  findContrato(conId: number): Observable<ContratoVO> {
    const urlStr = 'contrato/findContrato/' + conId;
    return this.http.get<ContratoVO>(urlStr, {});
  }

  findPersonasByContrato(conId: number): Observable<ContratoPersonaVO[]> {
    const urlStr = 'contrato/findPersonasByContrato/' + conId;
    return this.http.get<ContratoPersonaVO[]>(urlStr, {});
  }

  listcontratogetCuentaBancobyPerId(perId: number): Observable<CuentaContratoVO[]> {
    const urlStr = 'contrato/listcontratogetCuentaBancobyPerId/' + perId;
    return this.http.get<CuentaContratoVO[]>(urlStr, {});
  }

  getSolicitudContrato(listPerId: number[], folio: number, desPersona: string): Observable<ContratoFolderFondosVO> {
    const urlStr = 'contrato/getSolicitudContrato';
    const params: Object = new Object({'listPerId': JSON.stringify(listPerId),
    'folio': folio,'desPersona': desPersona});
    
    return this.http.post<ContratoFolderFondosVO>(urlStr, params);
  }

  sendMensajePaiOrigen(contratoFolder: ContratoFolderFondosVO, prospecto: ProspeccionPersonaVO): Observable<any> {
    const urlStr = 'contrato/sendMensajePaiOrigen';
    const params: Object = new Object({'contratoFolder': JSON.stringify(contratoFolder),
                                        'prospecto': JSON.stringify(prospecto)});
    return this.http.put(urlStr, params);
  }

  getAdicionalesByperId(perId: number, tconId: number): Observable<ContratoPersonaVO[]> {
    const urlStr = 'contrato/getAdicionalesByperId/' + perId + '/' + tconId;
    return this.http.get<ContratoPersonaVO[]>(urlStr, {});
  }

  findCampaignAC(tconId: number, cesId: number): Observable<number> {
    const urlStr = 'contrato/findCampaignAC/' + tconId + '/' + cesId;
    return this.http.get<number>(urlStr, {});
  }

  findCampaignsByTConID(args:Object): Observable<CampaignDetailVO[]> {
    const urlStr = 'persona/findCampaignsByTConID';
    return this.http.post<CampaignDetailVO[]>(urlStr, JSON.stringify(args));
  }

  findCampaignContratoMasterConId(conId: number, cmId: number): Observable<CampaignContratoMasterVO[]> {
    const urlStr = 'contrato/findCampaignContratoMasterConId/' + conId + '/' + cmId;
    return this.http.get<CampaignContratoMasterVO[]>(urlStr, {});
  }

  findCampaignsDetailByConId(conId: number, cmId: number): Observable<CampaignContratoVO[]> {
    const urlStr = 'contrato/findCampaignsDetailByConId/' + conId + '/' + cmId;
    return this.http.get<CampaignContratoVO[]>(urlStr, {});
  }

  agregaEliminaTodos(campaignContratoMaster:CampaignContratoMasterVO, campaignDetail: any[], conId: number, addOrDelete: boolean): Observable<any> {
    const urlStr = 'contrato/agregaEliminaTodos';
    const params: Object = new Object({'campaignContratoMaster': JSON.stringify(campaignContratoMaster),
                                      'campaignDetail': JSON.stringify(campaignDetail),
                                      'conId':conId, 'addOrDelete':addOrDelete});
    return this.http.put(urlStr, params);
  }
  
  saveOrUpdateCampaignContrato(campaignContratoMasterVO:CampaignContratoMasterVO): Observable<any> {
    const urlStr = 'contrato/saveOrUpdateCampaignContrato';
    return this.http.put(urlStr, campaignContratoMasterVO);
  }

  deleteCampaignContrato(campaignContratoMasterVO:CampaignContratoMasterVO, cmId:number, conId:number): Observable<any> {
    const urlStr = 'prospeccion/deleteCampaignContrato';

    const requestOptions: Object = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: new HttpParams().set('cmId', cmId).set('conId', conId),
      responseType: 'text',
    };
    
    return this.http.put<any>(urlStr, JSON.stringify(campaignContratoMasterVO),requestOptions);
  }

  getPersonaRiesgo(perId: number): Observable<PersonaRiesgoVO> {
    const urlStr = 'contrato/getPersonaRiesgo/' + perId;
    return this.http.get<PersonaRiesgoVO>(urlStr, {});
  }

  findCategPersonaById(id: number): Observable<CategPersonaVO> {
    const urlStr = 'contrato/findCategPersonaById/' + id;
    return this.http.get<CategPersonaVO>(urlStr, {});
  }
  
  findListContratobyPerId(perId: number): Observable<ContratoVO[]> {
    const urlStr = 'contrato/findListContratobyPerId/' + perId;
    return this.http.get<ContratoVO[]>(urlStr, {});
  }
}