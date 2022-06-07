import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColoniaVO, ContratoPersonaVO, ContratoVO, EntidadVO, LogBpmVO } from '@intercam/model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntidadServices{
    constructor(public http: HttpClient) { }

    /**Metod de conexion para obtener las entidades por clave de pais */
    findAllEntidadByPaiClave(paiClave: any): Observable<EntidadVO[]>{
      const params: Object = new Object({ 'paiClave': paiClave });
      let array=[];
      array.push(params);
      
      const urlStr = 'entidad/fill';
      return this.http.post<EntidadVO[]>(urlStr, array);
    }

     /**Metod de conexion para guardar  las entidades por clave de pais */
    saveEntidad(entidad: any): Observable<EntidadVO> {
      const urlStr = 'entidad/createItem';
      return this.http.post<EntidadVO>(urlStr, entidad);
    }
 /**Metod de conexion para eliminar las entidades por clave de pais */
    deleteEntidads(entidad: EntidadVO): Observable<object> {
      const params: Object = new Object({entidad })
      
      const urlStr = 'entidad/deleteItem';
       return this.http.delete<EntidadVO>(urlStr, params);
    }

     /**Metod de conexion para actualizar las entidades por clave de pais */
      updateEntidad(entidadNew: EntidadVO ): Observable<object>{
      const urlStr = 'entidad/update';
     return this.http.put(urlStr, entidadNew);
  
    } 
    deleteEntidad(profesion: EntidadVO):Observable<void> {
      const url = `'entidad/deleteItem`;
      console.log(url);
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: profesion
      };
  
      return this.http.delete<ArrayBuffer>(url, options).pipe(
        map(response => this.manageResponse(response))
      );
    }
    manageResponse(response: ArrayBuffer): void {
      if (response instanceof HttpErrorResponse) {
        return;
      }
      return;
    }

     
}