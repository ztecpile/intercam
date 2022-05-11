import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CargoFuncionarioVO, CategPersonaVO, ChTiposVO, ClTipSocVO, ColoniaVO, ContratoVO, CriterioAnalisisVO, DireccionVO, EntidadVO, MunicipVO, PepsVO, PerEmpleadoVO, PerfilInversion, PerfilInversionId, PerfilServicio, PerfilServicioId, PersonaAnalisisVO, PersonaFisicaVO, PersonaVO, RelacionPersonaVO, TipoDireccionVO, TipoPersonaVO, UsuarioContratoVO } from '@intercam/model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(public http: HttpClient) { }

  findPerfiles(): Observable<Object> {
    const urlStr = 'persona/findPerfiles';
    return this.http.get<Object>(urlStr, {});
  }

  findTipoPersona(): Observable<TipoPersonaVO[]> {
    const urlStr = 'catalogo/persona/tipo-persona';
    return this.http.get<TipoPersonaVO[]>(urlStr, {});
  }

  findCargoFuncionario(tipo: string): Observable<CargoFuncionarioVO[]> {
    const urlStr = 'catalogo/persona/cargo-funcionario/' + tipo;
    return this.http.get<CargoFuncionarioVO[]>(urlStr, {});
  }

  findAllCategPersona(): Observable<CategPersonaVO[]> {
    const urlStr = 'catalogo/persona/find-all/categ-persona';
    return this.http.get<CategPersonaVO[]>(urlStr, {});
  }

  findCategPersonaByTipoPersona(tpeClave: string): Observable<CategPersonaVO[]> {
    const urlStr = 'catalogo/persona/find/categ-persona/' + tpeClave;
    return this.http.get<CategPersonaVO[]>(urlStr, {});
  }

  getAllTiposCuenta(): Observable<ChTiposVO[]> {
    const urlStr = 'catalogo/persona/getAllTiposCuenta' ;
    return this.http.get<ChTiposVO[]>(urlStr, {});
  }

  getRFC(nombre:string, paterno: string, materno: string, fechaNac:string): Observable<any>{
    const urlStr = 'persona/getRFC';
    const requestOptions: Object = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: new HttpParams().set('nombre', nombre).set('paterno', paterno).set('materno', materno).set('fechaNac', fechaNac),
      responseType: 'text',
    };
    return this.http.get<any>(urlStr, requestOptions)
  }
  
  findAllColoniasByCodPost(codigoPostal: string): Observable<ColoniaVO[]>{
    const urlStr = 'catalogo/persona/getColoniasByCodPost/' + codigoPostal;
    return this.http.get<ColoniaVO[]>(urlStr, {});
  }
  
  findAllEntidadByPaiClave(paiClave: number): Observable<EntidadVO[]>{
    const urlStr = 'catalogo/persona/getEntidadByPaiClave/' + paiClave;
    return this.http.get<EntidadVO[]>(urlStr, {});
  }

  getMunicipoByMunClaveDeColonia(munClave: Number): Observable<MunicipVO> {
    const urlStr = 'catalogo/persona/getMunicipoByMunClaveDeColonia/' + munClave;
    return this.http.get<MunicipVO>(urlStr, {});
  }

  getEntidadByEntClaveDeMunicip(entClave: Number): Observable<EntidadVO> {
    const urlStr = 'catalogo/persona/getEntidadByEntClaveDeMunicip/' + entClave;
    return this.http.get<EntidadVO>(urlStr, {});
  }
  
  findTipoSoc(): Observable<ClTipSocVO[]> {
    const urlStr = 'catalogo/persona/findTipoSoc';
    return this.http.get<ClTipSocVO[]>(urlStr, {});
  }
  
  isCuentaActiva(cuenta: string):Observable<String>{
    const urlStr = 'catalogo/persona/isCuentaActiva/' + cuenta
    return this.http.get<string>(urlStr,{});
  }
  
  findPersonaById(id:Number): Observable<PersonaVO>{
    const urlStr = 'persona/findPersona/' + id;
    return this.http.get<PersonaVO>(urlStr, {});
  }
  
  findAllTipoDirecciones(): Observable<TipoDireccionVO[]> {
    const urlStr = 'persona/getTipoDirecciones';
    return this.http.get<TipoDireccionVO[]>(urlStr, {});
  }

  getClvLegadasByIdPromotor(perId:number): Observable<PerEmpleadoVO> {
    const urlStr = 'persona/getClvLegadasByIdPromotor/' + perId;
    return this.http.get<PerEmpleadoVO>(urlStr, {});
  }
  
  getEstatusNegocioPersonaProspecto(parametros:Object, maxClientes: number): Observable<any[]> {
    const urlStr = 'persona/getEstatusNegocioPersonaProspecto';

    const requestOptions: Object = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: new HttpParams().set('maxClientes', maxClientes)
    };
    
    return this.http.post<any[]>(urlStr, JSON.stringify(parametros),requestOptions);
  }

  findEjeDuenoById(perId:number): Observable<PersonaVO> {
    const urlStr = 'persona/findEjeDuenoById/' + perId;
    return this.http.get<PersonaVO>(urlStr, {});
  }

  findDireccionesByPersona(perId:number): Observable<DireccionVO[]> {
    const urlStr = 'persona/findDireccionesByPersona/' + perId;
    return this.http.get<DireccionVO[]>(urlStr, {});
  }

  validaExisteRFC(rfc: String): Observable<PersonaVO[]> {
    const urlStr = 'persona/getvalidaExisteRFC/' + rfc;
    return this.http.get<PersonaVO[]>(urlStr, {});
  }

  findCoincidencias(nombre: String, apPaterno: String, tipoBusqueda: String, valor: String): Observable<PersonaFisicaVO[]> {
    const urlStr = 'persona/findCoincidencias/' + nombre + '/' + apPaterno + '/' + tipoBusqueda + '/' + valor;
    return this.http.get<PersonaFisicaVO[]>(urlStr, {});
  }

  getContratosByPerId(perId: Number):Observable<UsuarioContratoVO[]> {
    const urlStr = 'persona/getContratosByPerId/' + perId;
    return this.http.get<UsuarioContratoVO[]>(urlStr, {});
  }

  findAllCriterioAnalisis():Observable<CriterioAnalisisVO[]> {
    const urlStr = 'persona/findAllCriterioAnalisis';
    return this.http.get<CriterioAnalisisVO[]>(urlStr, {});
  }

  findPersonaAnalisisbyPerId(perId: Number):Observable<PersonaAnalisisVO> {
    const urlStr = 'persona/findPersonaAnalisisbyPerId/' + perId;
    return this.http.get<PersonaAnalisisVO>(urlStr, {});
  }

  saveOrUpdatePersonaAnalisis(personaAnalisisVO: PersonaAnalisisVO): Observable<PersonaAnalisisVO> {
    const urlStr = 'persona/saveOrUpdatePersonaAnalisis';
    return this.http.post<PersonaAnalisisVO>(urlStr, personaAnalisisVO);
  }

  findPersFisicaById(perId: number): Observable<PersonaFisicaVO> {
    const urlStr = `persona/findPersFisicaById?perId=${perId}`;
    return this.http.get<PersonaFisicaVO>(urlStr, {});
  }
  
  updateEdoContratoDB(conId: number, cesId: number): Observable<Boolean> {
    const urlStr = 'persona/updateEdoContratoDB/' + conId + '/' + cesId;
    return this.http.post<Boolean>(urlStr, {});
  }
  
  findEntrevistaUnicabyPerId(perId:number): Observable<PersonaVO> {
    const urlStr = 'persona/findEntrevistaUnicabyPerId/' + perId;
    return this.http.get<PersonaVO>(urlStr, {});
  }

  updateContrato(contratoVO: ContratoVO): Observable<any[]> {
    const urlStr = `persona/updateContrato`;
    const params: Object = new Object({ 'contratoVO': JSON.stringify(contratoVO) });
    return this.http.post<any[]>(urlStr, params);
  }

  findPerfilInversion(idPerfilInversion: PerfilInversionId): Observable<PerfilInversion> {
    const urlStr = 'persona/findPerfilInversion';
    return this.http.post<PerfilInversion>(urlStr, idPerfilInversion);
  }

  getDireccion(clvPro:string, tconId:number): Observable<DireccionVO> {
    const urlStr = 'persona/getDireccion/' + clvPro + '/' + tconId;
    return this.http.get<DireccionVO>(urlStr, {});
  }

  findRelacionesPersona(perId:number, conId:number): Observable<RelacionPersonaVO[]> {
    const urlStr = 'persona/findRelacionesPersona/' + perId + '/' + conId;
    return this.http.get<RelacionPersonaVO[]>(urlStr, {});
  }

  findPeps(conId:number): Observable<PepsVO[]> {
    const urlStr = 'persona/findPeps/' + conId;
    return this.http.get<PepsVO[]>(urlStr, {});
  }

  validaPromotorSibamex(perId:number): Observable<PerEmpleadoVO> {
    const urlStr = 'persona/validaPromotorSibamex/' + perId;
    return this.http.get<PerEmpleadoVO>(urlStr, {});
  }

  findPerfilServicio(idPerfilServicio:PerfilServicioId): Observable<PerfilServicio> {
    const urlStr = 'persona/findPerfilServicio';
    return this.http.post<PerfilServicio>(urlStr, idPerfilServicio);
  }
}