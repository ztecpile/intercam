import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { SistemaVO } from "@intercam/model";

@Injectable ({
    providedIn: 'root'
})
export class UsuarioService{
    constructor(public http: HttpClient){}

    getHtmlMenu(login:string, sistema:string): Observable<any[]> {
        const urlStr = 'usuario/getHtmlMenu/' + login + '/' + sistema;
        return this.http.get<any[]>(urlStr, {});
    }

    findSistemaByNombre(sistema:string):Observable<SistemaVO> {
        const urlStr = 'usuario/findSistemaByNombre/' + sistema;
        return this.http.get<SistemaVO>(urlStr, {});
    }
}