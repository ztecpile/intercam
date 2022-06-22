import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContratoEjecutivoVO, ContratoFolderFondosVO, HomologacionVO, TransaccionFimpeVO } from '@intercam/model';
import { SucursalVO } from 'libs/model/src/lib/com/intercam/corporativo/centrocostos/vo/SucursalVO';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HomologacionClienteService {

    constructor(public http: HttpClient) { }

    /**
     * Metodo para recuperar una cadena de correos que se usa al salvar la HomologaciónVO en la propiedad(emailPersonas)
     * @param mail parametro de entrada de correo
     * @returns retorna una lista del modelo BancosVO
     */
    getCadenaCorreos(value: string): Observable<string> {
        const urlStr = 'commons/getCommonParameter?param='+value;
        return this.http.get(urlStr, { responseType: 'text'});
    }

    /**
     * Metodo recuperar motivos de homologación
     * @returns retorna una lista de cadena
     */
    getComboMotivosHomologacion(): Observable<string[]> {
        const urlStr = 'contrato/getMotivosHomologacion';
        return this.http.get<string[]>(urlStr, {});
    }

    /**
     * Metodo para salvar la homologocion
     * @param bodyHomologacion parametro de entrada de datos en el body para salvar la informacion
     * @returns retorna vacio
     */
    saveHomologacion(bodyHomologacion: HomologacionVO): Observable<any> {
        const urlStr = 'contrato/saveContHomologacion';
        return this.http.post<any>(urlStr, bodyHomologacion);
    }

    /**
     * Metodo para recuperar el Folder de Contratos
     * @param conId parametro de entrada
     * @returns retorna una cadena
     */
    getFolderContratos(conId: number): Observable<ContratoFolderFondosVO> {
        const urlStr = 'contrato/getcontratoFByBitPen?conId=' + conId;
        return this.http.get<ContratoFolderFondosVO>(urlStr, {});
    }

    /**
     * Metodo para recuperar contrato ejecutivo
     * @param conId parametro de entrada
     * @returns retorna modelo de contato ejecutivo
     */
    getContratoEjecutivo(conId: number): Observable<ContratoEjecutivoVO> {
        const urlStr = 'contrato/findContratoEjecutivoByConId?conId=' + conId;
        return this.http.get<ContratoEjecutivoVO>(urlStr, {});

    }

    /**
     * Metodo para cargar la sucursal de Usuario por usuClave
     * @param usuUsuario parametro de entrada para clave de usuario
     * @returns retorna el modelo sucursales
     */
    getSucursalUsuario(usuUsuario: string): Observable<SucursalVO> {
        const urlStr = 'centro/costos/getSucursal?usuUsuario=' + usuUsuario;
        return this.http.get<SucursalVO>(urlStr, {});
    }

    getBiometriaPersonal(perId: number): Observable<TransaccionFimpeVO>{
        const urlStr = 'persona/getTranFimpe?perId='+perId+'&trfTipo=0&trfCodigo=SRV000';
        return this.http.get<TransaccionFimpeVO>(urlStr,{});
    }

    getCategoriaCliente(tpeclave: any): Observable<any> {
        const urlStr = 'categorias-personas/remote/fill';
        return this.http.post<any>(urlStr, tpeclave);
    }

}