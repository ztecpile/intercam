import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { CatalogoManagerVO, ConsultaPipelineVO, CteReferenciadoVO, ExcepcionesProspeccionVO, FiltroPipelineVO, NegociosClienteProspectoVO, PersonaFisicaVO, PipelineVO, ProspeccionPersonaVO, ProspectoExcepcionesVO } from '@intercam/model';
import { ProspeccionResponse } from '../util/ProspeccionResponse';

@Injectable({
  providedIn: 'root'
})
export class ProspeccionService {
  
  constructor(private http: HttpClient) { }


  findDataUsuariosAsistente(listaIdsAsis: number[]): Observable<CatalogoManagerVO[]> {
    const urlStr = 'prospeccion/find/asistentes';
    return this.http.post<CatalogoManagerVO[]>(urlStr, listaIdsAsis);
  }


  findDPipeline(filtro: FiltroPipelineVO): Observable<ConsultaPipelineVO> {
    const urlStr = 'prospeccion/find/pipeline';
    return this.http.post<ConsultaPipelineVO>(urlStr, filtro);
  }

  findAllExcepcionesProspeccion(): Observable<ExcepcionesProspeccionVO[]> {
    const urlStr = 'prospeccion/findAllExcepcionesProspeccion';
    return this.http.get<ExcepcionesProspeccionVO[]>(urlStr, {});
  }

  findObtenerExcepcionesProspectoByPerId(perId: Number): Observable<ProspectoExcepcionesVO[]> {
    const urlStr = 'prospeccion/obtenerExcepcionesProspectoByPerId/' + perId;
    return this.http.get<ProspectoExcepcionesVO[]>(urlStr, {});
  }
  
  findPersonaProspectoById(idPersona: Number, idTipoNegocio: Number, prpId:Number): Observable<ProspeccionPersonaVO> {
    const urlStr = 'prospeccion/findPersonaProspectoById/' + idPersona + '/' + idTipoNegocio + '/'+ prpId;
    return this.http.get<ProspeccionPersonaVO>(urlStr, {});
  }

  findProspectosByPerIdContrato(perId: Number, tconId: Number): Observable<NegociosClienteProspectoVO[]> {
    const urlStr = 'prospeccion/findProspectosByPerIdContrato/' + perId + '/' + tconId;
    return this.http.get<NegociosClienteProspectoVO[]>(urlStr, {});
  }
  
  findPipelinebyFiltro(perId: Number): Observable<PipelineVO[]> {
    const urlStr = 'prospeccion/findPipelinebyFiltro/' + perId;
    return this.http.get<PipelineVO[]>(urlStr, {});
  }

  obtenerLimiteProspectos(ejecutivoId : number): Observable<boolean>{
    const urlStr = 'prospeccion/findLimiteAltaProspecto/' + ejecutivoId;
    return this.http.get<boolean>(urlStr,{});

  }

  savePersonaProspecto(prospecto: ProspeccionResponse): Observable<ProspeccionPersonaVO> {
    const urlStr = 'prospeccion/savePersonaProspecto';
    return this.http.post<ProspeccionPersonaVO>(urlStr, prospecto);
  }

  updatePersonaProspecto(prospectoPersona:ProspeccionPersonaVO): Observable<ProspeccionPersonaVO> {
    const urlStr = 'prospeccion/updatePersonaProspecto';
    return this.http.post<ProspeccionPersonaVO>(urlStr, prospectoPersona);
  }
  
  saveClienteReferenciado(prospecto: ProspeccionResponse): Observable<ProspeccionPersonaVO> {
    const urlStr = 'prospeccion/saveClienteReferenciado';
    return this.http.post<ProspeccionPersonaVO>(urlStr, prospecto);
  }
  findHPipelinebyId(pipid:number): Observable<any>{
    const urlStr = 'prospeccion/findHPipelinebyId/' + pipid;
    return this.http.get<any>(urlStr,{})
  }
}
