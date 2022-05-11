import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertasService {
  constructor() {}

  /**
   * Alerta con un mensaje basico
   * @param mensaje Mensaje que se desea mostrar
   * @param tipoIcono Tipo de icono (info, warning, success, error, question).
   * @param titulo Titulo del alert
   */

  mostrarMensaje(mensaje: string, tipoIcono: any, titulo: string) {
    Swal.fire({
      confirmButtonText: 'Aceptar',
      buttonsStyling: false,
      customClass: {
        title: 'sweet-title',
        confirmButton: 'button button1',
        popup: 'sweet-modal',
        container: '',
      },
      icon: tipoIcono,
      title: titulo,
      showCloseButton: true,
      showConfirmButton: true,
      text: mensaje,
      background: 'linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6))',
    });
  }

  /**
   * Alerta con botones (Aceptar, Cancelar) personalizados,
   * de lado del ts espera respuesta de los botones
   * para la ejecucion de la siguiente funcion
   *
   * @param mensaje Mensaje que se desea mostrar
   * @param tipoIcono tipo de icono (info, warning, success, error, question).
   * @param titulo Titulo del alert
   * @param msgBtnYes Titupo del boton OK, por default sera 'Aceptar'
   * @param msgBtnNo  Titulo del boton NO, por default sera 'Cancelar'
   * @Return Regresa la respuesa del boton aceptar  o cancelar
   */
  confirmAlert(mensaje: string, tipoIcono: any, titulo: string, msgBtnYes: string = 'Aceptar', msgBtnNo: string = 'Cancelar'): Promise<any> {
    return Swal.fire({
      confirmButtonText: msgBtnYes,
      cancelButtonText: msgBtnNo,
      buttonsStyling: false,
      customClass: {
        title: 'sweet-title',
        confirmButton: 'button button1',
        cancelButton: 'button button1',
        popup: 'sweet-modal',
        container: '',
      },
      icon: tipoIcono,
      title: titulo,
      showCloseButton: false,
      showConfirmButton: true,
      showCancelButton: true,
      text: mensaje,
      background: 'linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6))',
      allowOutsideClick: false
    });
  }

  /**
   * Muestra un mensaje de alerta informativo, con boton de aceptar
   * @param _title Titulo del alerta
   * @param _message Mensaje a presentar
   * @param _icon Icono del tipo de alerta: 'success', 'warning', 'info', 'error'
   * @param _widht Ancho de la alerta
   */
  infoAlert(
    _title: string,
    _message: string,
    _icon: any = 'info',
    _widht: string = '450px'
  ): void {
    Swal.fire({
      width: _widht,
      title: _title,
      text: _message,
      icon: _icon,
      confirmButtonText: 'Aceptar',
      showCloseButton: true,
      customClass: {
        title: 'sweet-title',
        confirmButton: 'button button1',
        cancelButton: 'button button1',
        popup: 'sweet-modal',
        container: '',
      },
    });
  }

  /**
   * Alerta solo con boton Aceptar, se  espera la respuesta del
   * boton para la ejecucion de la siguiente funcion.
   *
   * @param mensaje Mensaje que se desea mostrar
   * @param tipoIcono tipo de icono (info, warning, success, error, question).
   * @param titulo Titulo del alert
   * @param msgBtnYes Titupo del boton OK, por default sera 'Aceptar'
   * @Return Regresa la respuesa del boton aceptar
   */
   onlyConfirm(mensaje: string, tipoIcono: any, titulo: string, msgBtnYes: string = 'Aceptar'): Promise<any> {
    return Swal.fire({
      confirmButtonText: msgBtnYes,
      buttonsStyling: false,
      customClass: {
        title: 'sweet-title',
        confirmButton: 'button button1',
        popup: 'sweet-modal',
        container: '',
      },
      icon: tipoIcono,
      title: titulo,
      showCloseButton: false,
      showConfirmButton: true,
      text: mensaje,
      background: 'linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6))',
      allowOutsideClick: false
    });
  }

    /**
   * Alerta con botones (SI, NO, CANCELAR) personalizados,
   * de lado del ts espera respuesta de los botones
   * para la ejecucion de la siguiente funcion
   *
   * @param mensaje Mensaje que se desea mostrar
   * @param tipoIcono tipo de icono (info, warning, success, error, question).
   * @param titulo Titulo del alert
   * @param showBtnYes Mostrar/No mostrar btn de 'SI'
   * @param showBtnNo  Mostrar/No mostrar btn de 'NO'
   * @param showBtnNo  Mostrar/No mostrar btn de 'CANCELAR'
   * @Return Regresa la respuesa de los botones
   *         isConfirm : true si se eligio 'SI', 
   *         isDenied : true si se eligio 'NO', 
   *         dismiss : 'cancel' si se eligio 'CANCELAR'
   */
     alertYesNoCancel(mensaje: string, tipoIcono: any, titulo: string, showBtnYes: boolean, showBtnNo: boolean, showBtnCancel: boolean ): Promise<any> {
      return Swal.fire({
        confirmButtonText: 'SI',
        denyButtonText: 'NO',
        cancelButtonText: 'CANCELAR',
        buttonsStyling: false,
        customClass: {
          title: 'sweet-title',
          confirmButton: 'button button1',
          denyButton: 'button button1',
          cancelButton: 'button button1',
          popup: 'sweet-modal',
          container: '',
        },
        icon: tipoIcono,
        title: titulo,
        showCloseButton: false, //bton de cierre de la alerta, no se muestra
        showConfirmButton: showBtnYes,
        showDenyButton: showBtnNo,
        showCancelButton: showBtnCancel,
        text: mensaje,
        background: 'linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6))',
        allowOutsideClick: false
      });
    }
}
