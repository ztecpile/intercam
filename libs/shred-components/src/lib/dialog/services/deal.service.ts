import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OperacionVO } from '@intercam/model';


@Injectable({
    providedIn: 'root'
})


export class DealService {

    constructor(public http: HttpClient) { }
    findOperacionByDeal(deal:number,tconId:number): Observable<OperacionVO> {
        const urlStr = 'operacion-cambios/remote/findOperacionByDeal?deal='+deal+'&tconId='+tconId;
        return this.http.get<OperacionVO>(urlStr, {});
      }
  


}