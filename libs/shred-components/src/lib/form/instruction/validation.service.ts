import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  
  constructor() { }

  TECLAS_CONSECUTIVAS = ["QW","WE","ER","RT","TY","YU","UI","IO","OP",
                         "AS","SD","DF","FG","GH","HJ","JK","KL","LÑ",
                        "ZX","XC","CV","VB","BN","NM"];

  tecladoConsecutivo(value : string) : boolean {
    let resultado = true;
    if(value.length >= 2) {
      let _value = value.toUpperCase();
      for(var i = 0; i< this.TECLAS_CONSECUTIVAS.length; i++) {
        let element = this.TECLAS_CONSECUTIVAS[i];
        if(_value.indexOf(element) != -1) {
          resultado = false;
          break;
        }
      }
    }
    return resultado;
  }

  letraConsecutivas(value : string) : boolean {
    let resultado = true;
    if(value.length >= 3) {
      let contador = 0;
      let codigoLetra = new Array();
      for (var i = 0; i< value.length; i++) {
        codigoLetra[contador] = value.codePointAt(i);
        contador += 1;
        if(contador == 3) {
          if (codigoLetra[0] == codigoLetra[1] &&  codigoLetra[0] == codigoLetra[2]) {
            resultado = false;
            break;
          } else {
            let comp01 = (codigoLetra[0] + 1) == codigoLetra[1];
            let comp02 = (codigoLetra[0] + 2) == codigoLetra[2];
            if(comp01 && comp02) {
              resultado = false;
              break;
            }
          }
          codigoLetra[0] = codigoLetra[1];
          codigoLetra[1] = codigoLetra[2];
          contador = 2;
        }
      }
    }
    return resultado;
  }
}
