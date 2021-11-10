import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorporativoCommonsService {

  constructor(private http: HttpClient) { }

  getCommonParameter(param: string): Observable<string> {
    const urlStr = 'commons/find/parametro/' + param;
    return this.http.get<string>(urlStr, {});
  }

  getCommonParameterText(param: string): Observable<string> {
    const urlStr = 'commons/find/parametro/' + param;
    return this.http.get(urlStr, { responseType: 'text'});
  }

  getValoresByString(paramIds: string): Observable<any[]> {
    const urlStr = 'commons/find/parametros/';
    return this.http.post<any[]>(urlStr, { paramIds });
  }
  
  /**
   * Recupera una lista de parametros Lorenzo Mendoza 17 de julio del 2009
   * 
   * @see com.intercam.corporativo.commons.remote.ICorporativoCommonsRemote#getCommonParametersArray(java.lang.String)
   */
  getCommonParametersArray(param: string): Observable<Array<string>> {
    const urlStr = 'commons/getCommonParametersArray';
    return this.http.post<Array<string>>(urlStr, param);
  }
  
}
