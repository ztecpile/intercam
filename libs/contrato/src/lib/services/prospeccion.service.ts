import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { CatalogoManagerVO, ConsultaPipelineVO, ExcepcionesProspeccionVO, FiltroPipelineVO, NegociosClienteProspectoVO, PipelineBitacoraVO, PipelineVO, ProspeccionPersonaVO, ProspectoExcepcionesVO } from '@intercam/model';
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


  findPipeline(filtro: FiltroPipelineVO): Observable<ConsultaPipelineVO> {
    const urlStr = 'prospeccion/find/pipeline';
    return this.http.post<ConsultaPipelineVO>(urlStr, filtro);
  }

  findAllExcepcionesProspeccion(): Observable<ExcepcionesProspeccionVO[]> {
    const urlStr = 'prospeccion/findAllExcepcionesProspeccion';
    return this.http.get<ExcepcionesProspeccionVO[]>(urlStr, {});
  }

  findObtenerExcepcionesProspectoByPerId(perId: number): Observable<ProspectoExcepcionesVO[]> {
    const urlStr = 'prospeccion/obtenerExcepcionesProspectoByPerId/' + perId;
    return this.http.get<ProspectoExcepcionesVO[]>(urlStr, {});
  }
  
  findPersonaProspectoById(idPersona: number, idTipoNegocio: number, prpId:number): Observable<ProspeccionPersonaVO> {
    const urlStr = 'prospeccion/findPersonaProspectoById/' + idPersona + '/' + idTipoNegocio + '/'+ prpId;
    return this.http.get<ProspeccionPersonaVO>(urlStr, {});
  }

  findProspectosByPerIdContrato(perId: number, tconId: number): Observable<NegociosClienteProspectoVO[]> {
    const urlStr = 'prospeccion/findProspectosByPerIdContrato/' + perId + '/' + tconId;
    return this.http.get<NegociosClienteProspectoVO[]>(urlStr, {});
  }
  
  findPipelinebyFiltro(perId: number): Observable<PipelineVO[]> {
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

  updatePersonaProspecto(prospecto: ProspeccionResponse): Observable<ProspeccionPersonaVO> {
    const urlStr = 'prospeccion/updatePersonaProspecto';
    return this.http.post<ProspeccionPersonaVO>(urlStr, prospecto);
  }
  
  saveClienteReferenciado(prospecto: ProspeccionResponse): Observable<ProspeccionPersonaVO> {
    const urlStr = 'prospeccion/saveClienteReferenciado';
    return this.http.post<ProspeccionPersonaVO>(urlStr, prospecto);
  }

  findHPipelinebyId(pipid:number): Observable<any>{
    const urlStr = 'prospeccion/findHPipelinebyId/' + pipid;
    return this.http.get<any>(urlStr,{})
  }

  findEstadisticaPipeline(filtro: FiltroPipelineVO): Observable<ConsultaPipelineVO> {
    const urlStr = 'prospeccion/findEstadisticaPipeline';
    return this.http.post<ConsultaPipelineVO>(urlStr, filtro);
  }

  findAllPipelineBitacora(perId: number): Observable<PipelineBitacoraVO[]> {
    const urlStr = 'prospeccion/findAllPipelineBitacora/' + perId;
    return this.http.get<PipelineBitacoraVO[]>(urlStr, {});
  }

  finPipelineByPPId(prpId: number): Observable<PipelineVO> {
    const urlStr = 'prospeccion/finPipelineByPPId/' + prpId;
    return this.http.get<PipelineVO>(urlStr, {});
  }

  updateEdoPipeline(prospecto: ProspeccionResponse): Observable<any> {
    const urlStr = 'prospeccion/updateEdoPipeline';
    return this.http.put(urlStr, prospecto);
  }

  saveProspectoPersona(prospeccionPersonaVO: ProspeccionPersonaVO): Observable<any> {
    const urlStr = 'prospeccion/saveProspectoPersona';
    return this.http.post(urlStr, prospeccionPersonaVO);
  }

  updateImagenesProspecto(prospecto: ProspeccionPersonaVO): Observable<ProspeccionPersonaVO> {
    const urlStr = 'prospeccion/updateImagenesProspecto';
    return this.http.put<ProspeccionPersonaVO>(urlStr, prospecto);
  }
}
