import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CierreCasaBolsa } from '../components/cierre-casa-bolsa/cierre-casa-bolsa.component';
import { SectorEconomicoVO } from '@intercam/model';

@Injectable({
    providedIn: 'root'
})


export class SectorEconomicoService {

    constructor(public http: HttpClient) { }

    findSectorEconomicoVO(): Observable<SectorEconomicoVO[]> {
        const urlStr = 'sectores-economicos/remote/fill';
        return this.http.get<SectorEconomicoVO[]>(urlStr, {});

    }

    createItemSectorEconomicoVO(params: SectorEconomicoVO): Observable<SectorEconomicoVO> {
        const urlStr = `sectores-economicos/remote/createItem`;
        return this.http.post<SectorEconomicoVO>(urlStr, params);
    }

    updateItemSectorEconomicoVO(params: SectorEconomicoVO): Observable<SectorEconomicoVO> {
        const urlStr = `sectores-economicos/remote/updateItem`;
        return this.http.put<SectorEconomicoVO>(urlStr, params);
    }

    deleteItemSectorEconomicoVO(params: SectorEconomicoVO) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: params
        };

        const urlStr = `sectores-economicos/remote/deleteItem`;
        return this.http.delete<SectorEconomicoVO>(urlStr, httpOptions);
    }


}