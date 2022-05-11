import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EjecutivoSucursalVO } from '@intercam/model';

@Injectable({
  providedIn: 'root'
})
export class CentroCostrosService {

  constructor(public http: HttpClient) { }

  findCcoByNombreEjecutivo(nomEjecutivo:string): Observable<EjecutivoSucursalVO[]> {
    const urlStr = 'centro/costos/findCcoByNombreEjecutivo/' + nomEjecutivo;
    return this.http.get<EjecutivoSucursalVO[]>(urlStr, {});
  }
}