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
        const urlStr = 'tipos-relacion.php';
        return this.http.get<TipoRelVO[]>(urlStr, {});
    }


    deleteTipoRelVO(params: TipoRelVO) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: params
        };
        const urlStr = "tipos-relacion/remote/deleteItem";
        return this.http.delete<TipoRelVO>(urlStr, httpOptions);
    }




}