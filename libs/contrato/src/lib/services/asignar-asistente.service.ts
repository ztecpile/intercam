import { EjecutivoAsistenteVO } from "@intercam/model";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AsignarAsistenteServices {
    constructor(public http: HttpClient) { }

    findPerAsistente(ejecutivoID:number): Observable<EjecutivoAsistenteVO[]> {
        const urlStr = 'per-asistente/remote/fill';
        return this.http.post<EjecutivoAsistenteVO[]>(urlStr, [ejecutivoID]);
    }

    crearPerAsistente(params:EjecutivoAsistenteVO){
        const urlStr = 'per-asistente/remote/createItem';
        return this.http.post<EjecutivoAsistenteVO>(urlStr, params);   
    }
    eliminarPerAsistente(params): Observable<EjecutivoAsistenteVO[]> {

        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: params
        };

        const urlStr = 'per-asistente/remote/deleteItem';
        return this.http.delete<EjecutivoAsistenteVO[]>(urlStr, httpOptions);
    }
}