import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContratoPersonaVO, ReferenciaConvenioVO, PerReferenciaVO } from '@intercam/model';

@Injectable({
    providedIn: 'root'
})
export class ReferenciasService {

    constructor(public http: HttpClient) { }

    /**
     * Metodo para recuperar los contratos del Cliente Cargado
     * @param perId parametro para especificar el id de la persona
     * @returns una lista de los contratos de la persona
     */
    findPersonaContrato(perId: number): Observable<ContratoPersonaVO[]> {
        const urlStr = 'persona-contrato/fill';
        const array = ['findPersonasContratoByperId', perId]
        return this.http.post<ContratoPersonaVO[]>(urlStr, array);
    }

    /**
     * Metodo para recuperar las referencias bancarias del cliente
     * @param conId parametro para especificar el contrato
     * @returns una lista de las referencias del contrato
     */
    findReferenciaCliente(conId: number): Observable<ReferenciaConvenioVO[]> {
        const urlStr = 'persona-contrato/fill';
        const array = ['findAllReferenciaConvenioByperId', conId]
        return this.http.post<ReferenciaConvenioVO[]>(urlStr, array);
    }

    /**
     * Metodo para generar Referencias
     * @param conId pathvariable para generar nuevas referencias para el contrato
     * @returns una lista de referencias
     */
    generateReferencias(conId: number): Observable<any[]> {
        const urlStr = `persona/genRefByconId/${conId}`;
        return this.http.get<any[]>(urlStr, {});

    }

    sendReferencias(body:any): Observable<any> {
        const urlStr = 'persona/enviaReferencias';
        return this.http.post<PerReferenciaVO[]>(urlStr, body);

    }

}