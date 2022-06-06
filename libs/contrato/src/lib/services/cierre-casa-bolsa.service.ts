import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CierreCasaBolsa } from '../components/cierre-casa-bolsa/cierre-casa-bolsa.component';

@Injectable({
    providedIn: 'root'
})


export class CierreCasaBolsaService {

    constructor(public http: HttpClient) { }

    findTasaLuminaVO(): Observable<CierreCasaBolsa[]> {
        const urlStr = 'tasalumina/remote/fill';
        return this.http.get<CierreCasaBolsa[]>(urlStr, {});
      
    }


}