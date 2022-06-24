import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})


export class SimuladorFondosInversionService {

    constructor(public http: HttpClient) { }

    findFondosPrecioVO(monto: string, tipo_persona, periodo): Observable<Object[]> {
        monto = monto.replace("$", "");
        monto = monto.replace(",", "");
        //const urlStr = 'simulador-fondos/remote/findFondosPrecio?monto=' + monto + '&tipoPersona=' + tipo_persona;
        const urlStr="simulador.php";
        return this.http.get<Object[]>(urlStr, {});

    }
    findFondosRendimientos(){
        const urlStr="rendimientos.php";
        return this.http.get<Object[]>(urlStr, {}); 
    }
}