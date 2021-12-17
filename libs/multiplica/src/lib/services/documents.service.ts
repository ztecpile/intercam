import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Document, TypeDocument } from '../models/documents.interface';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  constructor(private http: HttpClient) {}

  getDocuments(): Observable<any[]> {
    const urlStr = 'documento/fill';
    return this.http.post<any[]>(urlStr, '');
  }

  saveDocument(body): Observable<any[]> {
    const urlStr = 'documento/createItem';
    return this.http.post<any[]>(urlStr, body);
  }

  updateDocument(body: Document): Observable<any[]> {
    const urlStr = 'documento/updateItem';
    return this.http.put<any[]>(urlStr, body);
  }

  deleteDocument(body: Document): Observable<any> {
    const urlStr = 'documento/deleteItem';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: body,
    };
    return this.http.delete<any[]>(urlStr, options);
  }

  /* ========================================================= */

  getTypeDocuments(): Observable<any[]> {
    const urlStr = 'tipo-documento/fill';
    const body = ['sinRelaciones'];
    return this.http.post<any[]>(urlStr, body);
  }

  saveTypeDocument(body: TypeDocument): Observable<any[]> {
    const urlStr = 'tipo-documento/createItem';
    return this.http.post<any[]>(urlStr, body);
  }

  updateTypeDocument(body: TypeDocument): Observable<any[]> {
    const urlStr = 'tipo-documento/updateItem';
    return this.http.put<any[]>(urlStr, body);
  }

  deleteTypeDocument(body: TypeDocument): Observable<any> {
    const urlStr = 'tipo-documento/deleteItem';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: body,
    };
    return this.http.delete<any[]>(urlStr, options);
  }
  /* ========================================================= */

  getRequiredDocuments(categPersonald, tconId, perfilId): Observable<any[]> {
    const urlStr = 'doc-requerido-conf/fill';
    const body = [categPersonald, tconId, perfilId];
    return this.http.post<any[]>(urlStr, body);
  }
}
