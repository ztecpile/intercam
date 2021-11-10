import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ClavePromLegadoVO, PerEmpleadoVO, UsuarioVO } from "@intercam/model";
import { SucursalVO } from "libs/model/src/lib/com/intercam/corporativo/centrocostos/vo/SucursalVO";

@Injectable ({
    providedIn: 'root'
})
export class UsuarioService{
    constructor(public http: HttpClient){}

    findCertificadoById(idPersona:number): Observable<any[]> {
        const urlStr = 'usuario/findCertificadoById/' + idPersona;
        return this.http.get<any[]>(urlStr, {});
    }

    getClavesLegadas(perId:number): Observable<ClavePromLegadoVO[]> {
        const urlStr = 'usuario/getClavesLegadas/' + perId;
        return this.http.get<ClavePromLegadoVO[]>(urlStr, {});
    }

    getUsuario(perId:number): Observable<UsuarioVO> {
        const urlStr = 'usuario/getUsuario/' + perId;
        return this.http.get<UsuarioVO>(urlStr, {});
    }
    getSucPromsDirector(idEjecutivoConsulta):Observable<SucursalVO[]>{
        const urlStr ='usuario/getSucPromsDirector/'+ idEjecutivoConsulta;
        return this.http.get<SucursalVO[]>(urlStr,{});
    }
    getAreasPromsDirector(idEjecutivoConsulta: number, sucClave: number):Observable<any[]>{
        const urlStr ='usuario/getAreasPromsDirector/'+idEjecutivoConsulta +'/'+sucClave;
        return this.http.get<any[]>(urlStr,{});
    }
    getSubArPromsDirector(idEjecutivoConsulta: number, sucClave: number, areClave: number ):Observable<any[]>{
        const urlstr = 'usuario/getSubArPromsDirector/'+idEjecutivoConsulta +'/' + sucClave +'/' + areClave;
        return this.http.get<any[]>(urlstr,{});
    }
    findUsuarioBySucAreaSubArea(sucClave: number, areClave: number, sarClave: number):Observable<any[]>{
        const urlsStr = 'usuario/findUsuarioBySucAreaSubArea/'+ sucClave +'/'+ areClave+'/'+ sarClave;
        return this.http.get<any[]>( urlsStr, {});
        }
    }
   