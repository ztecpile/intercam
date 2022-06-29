import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConEmailVO, ContratoEjecutivoVO, ContratoFolderFondosVO, HomologacionVO, InstrumentoVO, ReenvioFacturaVO, TransaccionFimpeVO } from '@intercam/model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class EnvioMasivoFacturasService {

    constructor(public http: HttpClient) { }

    /**
     * Metodo para obtener el listado de instrumentos
     * @returns retorna una lista del modelo IntrumentoVO
     */
    getListaInstrumentos(): Observable<InstrumentoVO[]> {
        const urlStr = 'instrumento/remote/fill';
        const body = ["instrumentos"];
        return this.http.post<InstrumentoVO[]>(urlStr, body);
    }

    /**
     * Metodo para obtener el listado de cuentas
     * @param conId parametro para el contrato del cliente
     * @returns retorna una lista del modelo ConEmailVO
     */
    getListaCuentasCorreo(conId: any): Observable<ConEmailVO[]> {
        const urlStr = 'operacion-cambios/remote/obtenerCuentasCorreoAdicionales?conId=' + conId;
        return this.http.get<ConEmailVO[]>(urlStr, {});
    }
/**
 * Metodo para obtener el listado de operaciones o ingresos
 * @param body parametro para enviar el cuerpo del servicio
 * @param tipoCheck parametro para especificar que servicio ejecutara
 * @returns retorna un listado de del modelo ReenvioFacturaVO
 */
    getListaOperacionesOIngresos(body: any, tipoCheck: string): Observable<ReenvioFacturaVO[]> {
        let urlStr = '';
        if (tipoCheck == 'deal') {
            urlStr = 'operacion-cambios/remote/obtenerOperacionReenvioFactura';
        } 
        if(tipoCheck == 'ingreso') {
              urlStr = 'operacion-cambios/remote/obtenerIngresoReenvioFactura';
        }

        return this.http.post<ReenvioFacturaVO[]>(urlStr, body);
    }

    /**
     * Metodo para la accion de enviar las facturas
     * @param body parametro para enviar el cuerpo del servicio
     * @returns retorna vacio
     */
    sendFacturas(body:any): Observable<void>{
        const urlStr = 'operacion-cambios/remote/reenviarFacturaOperacion';
        return this.http.post<void>(urlStr, body);
    }


}