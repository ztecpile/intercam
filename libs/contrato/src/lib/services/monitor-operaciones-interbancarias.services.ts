
import { DealtrackerVO, EjecutivoAsistenteVO } from "@intercam/model";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class MonitorOperacionesInterbancariasServices {
    constructor(public http: HttpClient) { }

    findOperaciones(parsm): Observable<DealtrackerVO[]> {
        //const urlStr = 'per-asistente/remote/fill';
        const urlStr = 'operacion-cambios/remote/findOperaciones';
        // const urlStr = 'findOperaciones.php';
        return this.http.post<DealtrackerVO[]>(urlStr, parsm);
    }

}