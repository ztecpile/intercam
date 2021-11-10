import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogBpmVO } from '@intercam/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoporteService {
  constructor(public http: HttpClient) { }

  showlogBPM():Observable<LogBpmVO[]>{
    const urlStr ='logBPM/find-log';
    return this.http.get<LogBpmVO[]>(urlStr, {});
}
 
}
