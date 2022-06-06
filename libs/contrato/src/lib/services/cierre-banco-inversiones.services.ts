import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoInversionVO } from '@intercam/model';
import { ConsultaMatrizTasasVO } from '../components/cierre-banco-inversiones/cierre-banco-inversiones.component';


@Injectable({
    providedIn: 'root'
})


export class CierreBancoInversionesServices {

    constructor(public http: HttpClient) { }

    findTipoInversionVO(): Observable<TipoInversionVO[]> {
        const urlStr = 'inversion-banco/remote/consultaTiposInversion';
        return this.http.get<TipoInversionVO[]>(urlStr, {});

    }

    findFechaAperturaPorSucursal(){
        const urlStr = 'soporte-banco/remote/consultaFechaAperturaPorSucursal?numSucursal=001';
        return this.http.get<string>(urlStr, {});
    }

    findConsultaMatrizTasasVO(tipo_persona, moneda, tipo_inversion): Observable<Object[]> {
        const urlStr = 'inversion-banco/remote/consultaMatrizTasas?tipoPersona=' + tipo_persona + '&moneda=' + moneda + '&tipoInversion=' + tipo_inversion + '&sucOrigen=001';
        return this.http.get<Object[]>(urlStr, {});
    }




}