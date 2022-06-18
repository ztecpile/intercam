import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ABCParametrosVO, InfoFechaHabilVO } from '@intercam/model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  constructor(public http: HttpClient) { }

  
  findAllParametros(): Observable<ABCParametrosVO[]>{
    const urlStr = 'parametro/remote/fill' ;
    let parametros =[];
    parametros.push("findParametros");
    return this.http.post<ABCParametrosVO[]>(urlStr,parametros);
  }
  saveParametros(parametro: ABCParametrosVO): Observable<ABCParametrosVO>{
    const urlStr   = 'parametro/remote/createItem';
    return this.http.post<ABCParametrosVO>(urlStr, parametro);

  }

  /**Metodo que actualiza la profecion  */
  updateParametros(parametroNew: ABCParametrosVO): Observable<object>{
    const urlStr = 'parametro/remote/updateItem';
    const params: Object = new Object(JSON.stringify(parametroNew));
  return this.http.put(urlStr, parametroNew);

     

  }

  /**Metodo que elimina la profecion por id de profesion  */

  deleteParametros(profesion: ABCParametrosVO):Observable<void> {
    const url = `profesion/deleteItem`;
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

  reiniciaInfo()
{
  const urlStr = 'operacion-cambios/remote/enviarMsgGenerarMovtoLineaOpe';
  return this.http.get<InfoFechaHabilVO>(urlStr, {});

}
/**Metodo de la peticion para generar motivos linea operacion  */
generaMotivos(): Observable<any>{
  const urlStr = 'operacion-cambios/remote/enviarMsgGenerarMovtoLineaOpe';
  return this.http.get<any>(urlStr, {});
}
/**Metodo para realizar la peticion de envio de SPID */
envioSPID(): Observable<any>{
  const urlStr = 'operacion-cambios/remote/sendOperSPIDFV';
  return this.http.get<any>(urlStr, {});
}
/**Metedo ejecuta proceso de Cancelacion  */
ejecutaProceso(){
  const urlStr = 'operacion-cambios/remote/cancelarSolicitudReversoFinDia';
  return this.http.get<any>(urlStr, {});
}
}
