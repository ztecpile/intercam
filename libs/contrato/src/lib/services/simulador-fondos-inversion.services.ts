import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})


export class SimuladorFondosInversionService {

    constructor(public http: HttpClient) { }

    findFondosPrecioVO(monto: any, tipo_persona, periodo): Observable<Object[]> {
        monto = monto.replaceAll("$", "");
        monto = monto.replaceAll(",", "");
        const urlStr = 'simulador-fondos/remote/findFondosPrecio?monto=' + monto + '&tipoPersona=' + tipo_persona;
        return this.http.get<Object[]>(urlStr, {});

    }
    findFondosRendimientos(params:Object){
        const urlStr="simulador-fondos/remote/findRendimientos";
        params["monto"] = params["monto"].replaceAll("$", "");
        params["monto"] = params["monto"].replaceAll(",", "");
        return this.http.post<Object[]>(urlStr, params); 
    }
}