import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'apps/ismart-pos/src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class ConfiguracionLimitesHorariosService {
    constructor(public http: HttpClient) { }

    getMesasDivisas() {
        const urlStr =  `${environment.URLServicePrice}preciosRemote/getMesasDivisas?tipoEsquema=TODAS`;
        //const urlStr = 'getMesasDivisas.php?tipoEsquema=MATRIZ';
        return this.http.get<any[]>(urlStr, {});
    }

    getLimiteSolicitudesInstrumento(){
        const urlStr = 'operacion-cambios/remote/getLimiteSolicitudesInstrumento';
        //const urlStr = 'getLimiteSolicitudesInstrumento.php';
        return this.http.get<any[]>(urlStr, {});  
    }

    guardarLimiteCambioInstrumento(params){
        const urlStr = 'operacion-cambios/remote/guardarLimiteCambioInstrumento';
        return this.http.post<any[]>(urlStr, params);   
    }

    actualizarLimiteCambioInstrumento(params){
        const urlStr = 'operacion-cambios/remote/actualizarLimiteCambioInstrumento';
        return this.http.put<any[]>(urlStr, params);   
    }



    eliminarLimiteCambioInstrumento(params){


        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: params
        };
        const urlStr = 'operacion-cambios/remote/eliminarLimiteCambioInstrumento';
        return this.http.delete<any>(urlStr, httpOptions);     
    }

}