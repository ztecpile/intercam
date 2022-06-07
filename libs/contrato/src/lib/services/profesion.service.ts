import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfesionVO } from '@intercam/model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfesionService {

  constructor(public http: HttpClient) { }

  
  findAllProfesion( ): Observable<ProfesionVO[]>{
    const urlStr = 'profesion/fill' ;
    return this.http.post<ProfesionVO[]>(urlStr,{});
  }
  saveProfesion(profesion: ProfesionVO): Observable<ProfesionVO>{
    const urlStr   = 'profesion/createItem';
    return this.http.post<ProfesionVO>(urlStr, profesion);

  }

  /**Metodo que actualiza la profecion  */
  updateProfesion(profesionNew: ProfesionVO): Observable<object>{
    const urlStr = 'profesion/update';
    const params: Object = new Object(JSON.stringify(profesionNew));
  return this.http.put(urlStr, profesionNew);

     

  }

  /**Metodo que elimina la profecion por id de profesion  */
  deleteProfesions(profesion: any): Observable<object>{
    const urlStr = 'profesion/deleteItem';
    const params: Object = new Object({profesion});
    return this.http.delete<ProfesionVO>(urlStr, params);

  }
  deleteProfesion(profesion: ProfesionVO):Observable<void> {
    const url = `profesion/deleteItem`;
    console.log(url);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: profesion
    };

    return this.http.delete<ArrayBuffer>(url, options).pipe(
      map(response => this.manageResponse(response))
    );
  }
  manageResponse(response: ArrayBuffer): void {
    if (response instanceof HttpErrorResponse) {
      return;
    }
    return;
  }

}
