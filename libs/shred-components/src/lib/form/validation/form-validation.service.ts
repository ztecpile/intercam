import { Injectable, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { ValidationService } from '../instruction/validation.service';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  public static limpiar: boolean = true;
  constructor(private validationService: ValidationService) { }


  limpiaFormulario(formGroup: FormGroup) {
    if (!FormValidationService.limpiar) {
      return;
    }
    //    let div;
    //    let el : Element;
    //    let control : FormControl;
    Object.keys(formGroup.controls).forEach(nameControl => {
      //      div = document.getElementById('div' + nameControl);
      //      control = <FormControl>formGroup.controls[nameControl];
      this.cleanElement(formGroup, nameControl);
      /*
            if(div) {
              el = div.children.item(0);
              if(el) {
                control.setValue("");
                if(el.tagName != "SELECT") {
                  if(el.nextElementSibling) {
                    el.nextElementSibling.classList.remove("fijar");
                  }
                }
              }
            }
      */
    });
  }

  cleanElement(formGroup: FormGroup, nameElement: string) {
    let div = document.getElementById('div' + nameElement);
    let el: Element;
    let control: FormControl;
    if (div) {
      el = div.children.item(0);
      if (el) {
        control = <FormControl>formGroup.controls[nameElement];
        control.setValue("");
        if (el.tagName != "SELECT") {
          if (el.nextElementSibling) {
            el.nextElementSibling.classList.remove("fijar");
          }
        }
      }
    }
  }

  accommodateComponent(nameElement: string) {
    let info = document.getElementById('info' + nameElement);
    let parent = document.getElementById('div' + nameElement);
    let error = document.getElementById('error' + nameElement);
    let instructions = document.getElementById('instrucciones' + nameElement);
    let tempInfo, tempError, tempInstructions;
    let banderaInfo = false, banderaError = false, banderaInstructions = false;

    tempInfo = info;
    tempError = error;
    tempInstructions = instructions;

    if (info) {
      banderaInfo = true;
      parent.removeChild(info);
    }
    if (error) {
      banderaError = true;
      parent.removeChild(error);
    }
    if (instructions) {
      banderaInstructions = true;
      parent.removeChild(instructions);
    }
    if (banderaError)
      parent.appendChild(tempError);
    if (banderaInfo)
      parent.appendChild(tempInfo);
    if (banderaInstructions)
      parent.appendChild(tempInstructions);
  }

  differentValue(formulario: FormGroup, nombreCampo: string, error: string) {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let value = control.value;
      let compare = formulario.controls[nombreCampo].value;
      if (value == compare) {
        var json = {};
        json[error] = true;
        return json;
      }
      return null;
    };
  }

  sameValue(formulario: FormGroup, nombreCampo: string, error: string) {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let value = control.value;
      let compare = formulario.controls[nombreCampo].value;
      if (value != compare) {
        var json = {};
        json[error] = true;
        return json;
      }
      return null;
    };
  }

  letrasConsecutivas(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let value = control.value;
      if (!this.validationService.letraConsecutivas(value)) {
        return { 'LetrasConsecutivas': true };
      }
      return null;
    };
  }

  tecladoConsecutivo(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let value = control.value;
      if (!this.validationService.tecladoConsecutivo(value)) {
        return { 'TecladoConsecutivo': true };
      }
      return null;
    };
  }

  horario(formulario: FormGroup, nombreCampo: string, fecha: Date): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let hora = new Date();
      let horaArr = String(control.value).split(":");
      hora.setHours(Number(horaArr[0]));
      hora.setMinutes(Number(horaArr[1].substring(0, 2)));
      if (fecha.getDate() === new Date().getDate()) {
        if (hora <= new Date()) {
          return { 'hDate': true };
        }
      }
      return null;
    };
  }

  ivaMayorPago(formulario: FormGroup, nombreCampo: string, validaIva: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (formulario.controls[validaIva].value == true) {
        let value = control.value;
        let compare = formulario.controls[nombreCampo].value;
        if (value >= compare) {
          return { 'higherAmountIva': true };
        }
      }
      return null;
    };
  }

  rfc(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      // se valida campo al vuelo, es la finalidad de este validador
      return null;
    };
  }

  importePago(monto: number, saldo: number, errorMonto: string, errorSaldo: string) {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let value = control.value;
      if (value > monto) {
        var json = {};
        json[errorMonto] = true;
        return json;
      }
      if (value > saldo) {
        var json = {};
        json[errorSaldo] = true;
        return json;
      }
      return null;
    };
  }

  numeroTelefonico(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let value = control.value;
      let phone = new RegExp("^([0-9]){10,13}$");

      if (!phone.test(value) || (value.length != 10 && value.length != 13)) {
        return { 'NumeroTelefonico': true };
      }
      return null;
    };
  }

  alfanumerico(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let value = control.value;
      let alfanumerico = new RegExp("^[A-Z0-9\s]+$");

      if (!alfanumerico.test(value)) {
        return { 'pattern': true };
      }
      return null;
    };
  }

  //  listaNoVacia( lista: any, error : string) {
  listaNoVacia(error: string) {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let lista = control.value;
      if (lista == []) {
        var json = {};
        json[error] = true;
        return json;
      }
      return null;
    };
  }

  changeStyle(formGroup: FormGroup) {
    //    let div;
    //   let el : Element;
    let control: FormControl;
    Object.keys(formGroup.controls).forEach(nameControl => {
      control = <FormControl>formGroup.controls[nameControl];
      this.changeStyleElement(nameControl);
    });
  }

  changeStyleElement(nameElement: string) {
    let el: Element;
    let div = document.getElementById('div' + nameElement);
    if (div) {
      el = div.children.item(0);
      if (el) {
        if (el.tagName != "SELECT") {
          if (el.nextElementSibling) {
            el.nextElementSibling.classList.add("fijar");
          }
        }
      }
    }
  }

}
