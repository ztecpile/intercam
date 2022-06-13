import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoRelVO } from '@intercam/model';

@Injectable({
    providedIn: 'root'
})


export class TipoRelacionService {

    constructor(public http: HttpClient) { }

    findTipoRelVO(): Observable<TipoRelVO[]> {
        const urlStr = 'tipos-relacion/remote/fill';
        return this.http.post<TipoRelVO[]>(urlStr, []);
    }


    deleteTipoRelVO(params: TipoRelVO) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: params
        };
        const urlStr = "tipos-relacion/remote/deleteItem";
        return this.http.delete<TipoRelVO>(urlStr, httpOptions);
    }

    createTipoRelVO(params: TipoRelVO): Observable<TipoRelVO[]> {
        const urlStr = 'tipos-relacion/remote/createItem';
        params.tconId=7;
        return this.http.post<TipoRelVO[]>(urlStr, params);
    }


    updateTipoRelVO(params: TipoRelVO): Observable<TipoRelVO[]> {
        const urlStr = 'tipos-relacion/remote/updateItem';
        return this.http.put<TipoRelVO[]>(urlStr, params);
    }




}