import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColoniaVO, ContratoPersonaVO, ContratoVO, EntidadVO, LogBpmVO, MunicipVO, ProfesionVO } from '@intercam/model';

@Injectable({
  providedIn: 'root'
})
export class ColoniasServices{
    constructor(public http: HttpClient) { }

    findAllColoniasByCodPost( cp : number []): Observable<ColoniaVO[]>{
        const urlStr = 'colonia/fill' ;
        return this.http.post<ColoniaVO[]>(urlStr, cp);
      }

      findAllEntidadByPaiClave(paiClave: number): Observable<EntidadVO[]>{
        const urlStr = 'catalogo/persona/getEntidadByPaiClave/' + paiClave;
        return this.http.get<EntidadVO[]>(urlStr, {});
      }

      saveColonia(colonia: ColoniaVO): Observable<ColoniaVO>{
        const urlStr = 'colonia/createItem';
        return this.http.post<ColoniaVO>(urlStr, colonia);
 
      }

      updateColonia(colonia: ColoniaVO): Observable<object>{
        const urlStr = 'colonia/updateItem';
       
      return this.http.put(urlStr, colonia);
    
      }
      deleteProfesion(colonia: ColoniaVO): Observable<object>{
        const urlStr = 'colonia/deleteItem';
        const params: Object = new Object({colonia });
        return this.http.delete<ProfesionVO>(urlStr, params);
    
      }

      findMunicipioByEntidad(entidad:number):Observable<MunicipVO[]>{
       
        var cps = [];
        let ent :string="entidad";
        cps.push(ent);
        cps.push(entidad);

       
        const urlStr = 'municipio/fill';
        return this.http.post<MunicipVO[]>(urlStr, cps);
      }

      /**Medoto que regresa ela colonia por municipio */
      findColoniaByMunicipio(municipio:number){
        const params: Object = new Object({ municipio });
        let array=[];
        array.push(municipio);
        
        const urlStr = 'colonia/fill';
        return this.http.post<ColoniaVO[]>(urlStr, array);
      }
}