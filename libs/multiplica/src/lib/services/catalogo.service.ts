import { Injectable } from '@angular/core';
import { Document, TypeDocument } from '../models/documents.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http: HttpClient) { }

  getTypePerson(): Observable<any[]> {
    const urlStr = 'catalogo/persona/find-all/categ-persona';
    return this.http.get<any[]>(urlStr);
  }

  getTypePerfil(idTipoContrato:any, idTipoPersona:any): Observable<any[]> {
    const urlStr = `persona/getPerfilesByTconIdByTpeClave/${idTipoContrato}/${idTipoPersona}`;
    return this.http.get<any[]>(urlStr);
  }
  
}
