import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GrupoVO } from 'libs/model/src/lib/com/intercam/seguridad/vo/GrupoVO';
import { DivisasVO, PreciosGpodivVO, PreciosGposeccVO } from '@intercam/model';
import {environment} from 'apps/ismart-pos/src/environments/environment';
@Injectable({
    providedIn: 'root'
})


export class ReutersAdministracionPerfilesService {

    constructor(public http: HttpClient) { }

    findGpoAdmonPrecios(): Observable<GrupoVO[]> {
        const urlStr = 'seguridad/remote/findGpoAdmonPrecios';
        return this.http.get<GrupoVO[]>(urlStr, {});
    }

    findDivisas():Observable<DivisasVO[]>{
        const urlStr="divisas/remote/fill";
        return this.http.post<DivisasVO[]>(urlStr,[]);
    }

    getPerfilesByGpo(grupoid):Observable<PreciosGpodivVO[]>{
        const urlStr = `${environment.URLServicePrice}preciosRemote/getPerfilesByGpo?gpoClave=${grupoid}`;
        return this.http.get<PreciosGpodivVO[]>(urlStr, {}); 
    }

    getSeccionesByGpo(grupoid):Observable<PreciosGposeccVO[]>{
        const urlStr = `${environment.URLServicePrice}preciosRemote/getSeccionesByGpo?gpoClave=${grupoid}`;
        return this.http.get<PreciosGposeccVO[]>(urlStr, {}); 
    }

    savePerfil(params:Object):Observable<void>{
        const urlStr = `${environment.URLServicePrice}preciosRemote/savePerfil`;
        return this.http.put<void>(urlStr, params); 
    }
    

}