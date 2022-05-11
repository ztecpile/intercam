import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorklistService {

  constructor(public http: HttpClient) {}

  findTasksByValProperty(property:string, valor:string, taskPlanId:string): Observable<any[]> {
    const urlStr = 'worklist/findTasksByValProperty/' + property + '/' + valor + '/' + taskPlanId;
    return this.http.get<any[]>(urlStr, {});
  }
}