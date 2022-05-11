import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CuestionarioVO } from '@intercam/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoCuestionarioService {

  constructor(public http: HttpClient) { }

  fill(fillParameters:Object): Observable<any[]> {
    const urlStr = 'tipo-cuestionario/fill';
    return this.http.post<any[]>(urlStr, fillParameters);
  }

  createItem(item: CuestionarioVO): Observable<any> {
    const urlStr = 'tipo-cuestionario/createItem';
    return this.http.post<any[]>(urlStr, item);
  }
}