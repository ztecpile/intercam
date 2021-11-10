import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaisVO } from '@intercam/model';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  constructor(public http: HttpClient) { }

  findAllPaises(): Observable<PaisVO[]> {
    const urlStr = 'catalogo/paises/findAll';
    return this.http.get<PaisVO[]>(urlStr, {});
  }

}
