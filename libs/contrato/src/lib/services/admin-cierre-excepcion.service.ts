import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CierreExcepVO, UsuarioVO } from '@intercam/model';

@Injectable({
  providedIn: 'root'
})
export class AdministracionCierreExcepcionService {

  constructor(public http: HttpClient) { }

  /**
   * Metodo para el servicio de obtencion de operadores
   * 
   * @returns Lista de la clase UsuariosVO
   */
  findAdministracionCierreExcepcion(): Observable<UsuarioVO[]> {
    const urlStr = 'operacion-forward/operadores/fill';
    return this.http.get<UsuarioVO[]>(urlStr, {});
  }

  findOperadoresExcepcion(): Observable<string> {
    const urlStr = 'operacion-forward/operadores/excepcion/fill';
    return this.http.get<string>(urlStr, {});
  }

  getActualizarOperador(cierre :CierreExcepVO): Observable<CierreExcepVO>{
      const urlStr = 'operacion-forward/operadores/updateItem';
      return this.http.put<CierreExcepVO>(urlStr,cierre);
  }

}