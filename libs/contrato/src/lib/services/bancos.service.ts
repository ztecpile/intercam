import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BancosVO, PaisVO } from '@intercam/model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    deleteBanco(banco: BancosVO): Observable<void> {
        const urlStr = 'bancos/remote/deleteItem';
        const options ={
            headers: new HttpHeaders({
                'Content-Type':'application/json'
            }),
            body:banco
        };
        return this.http.delete<ArrayBuffer>(urlStr, options).pipe(map(response=>this.manageResponse(response)));
    }
/**
 * Metodo para crear el ArrayBuffer
 * @param response parametro de entrada para el buffer
 * @returns 
 */
    manageResponse(response: ArrayBuffer): void {
        if (response instanceof HttpErrorResponse) {
          return;
        }
        return;
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