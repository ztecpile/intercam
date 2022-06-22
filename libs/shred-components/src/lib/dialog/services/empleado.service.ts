import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EjecutivoSucursalVO, OperacionVO } from '@intercam/model';


@Injectable({
    providedIn: 'root'
})


export class EmpleadoService {

    constructor(public http: HttpClient) { }
    findEmpleados(filtro:string): Observable<EjecutivoSucursalVO[]> {
        const urlStr = 'centro/costos/findCcoByNombreEjecutivo/'+filtro;
        return this.http.get<EjecutivoSucursalVO[]>(urlStr, {});
    }



}