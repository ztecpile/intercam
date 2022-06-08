import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BancosVO, PaisVO } from '@intercam/model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BancoService {

    constructor(public http: HttpClient) { }

    /**
     * Metodo para recuperar el catálogo de bancos
     * @returns retorna una lista del modelo BancosVO
     */
    getBancos(): Observable<BancosVO[]> {
        const urlStr = 'bancos/remote/fill';
        return this.http.post<BancosVO[]>(urlStr, []);
    }

    /**
     * Metodo para crear un item de banco
     * @param banco parametro de entrada que se envia en el body
     * @returns retorna vacio
     */
    createBanco(banco: BancosVO): Observable<object> {
        const urlStr = 'bancos/remote/createItem';
        return this.http.post<any>(urlStr, banco);
    }
    /**
     * Metodo para actualizar el item de banco
     * @param banco  parametro de entrada de datos actualizados que se envia en el body
     * @returns retorna vacio
     */
    updateBanco(banco: BancosVO): Observable<object> {
        const urlStr = 'bancos/remote/updateItem';
        return this.http.put<any>(urlStr, banco);
    }
/**
 * Metodo para borrar un item de banco
 * @param banco parametro de entrada que se envia en el body
 * @returns retorna vacio
 */
    deleteBanco(banco: BancosVO): Observable<object> {
        const urlStr = 'bancos/remote/deleteItem';
        const params: Object = new Object({ 'newVersion': JSON.stringify(banco) });
        return this.http.delete<BancosVO>(urlStr, params);
    }
/**
 * Metodo para recuperar los paises
 * @returns retorna una lista de paisVO
 */
    getPaises(): Observable<PaisVO[]>{
        const urlStr = 'catalogo/paises/findAll'
        return this.http.get<PaisVO[]>(urlStr,{});
    }
}