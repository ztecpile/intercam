import { Injectable } from '@angular/core';
import { Const, FechaValorVO, DivisasVO, InstrumentoVO, OperInstrumentoVO, Util } from '@intercam/model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperInstruService {

  /**
   * Objeto que emite el evento de cambio en la informacion del operInstrumento
   */
  private calcularPesosOperInstruVO$: Subject<OperInstrumentoVO>;

  /**
   * Objeto que emite el evento de comision Alta en el operInstrumento
   */
  private comisionAltaOperInstruVO$: Subject<OperInstrumentoVO>;

  /**
  * Objeto que emite el evento de actualizar precios en Cierre Canje
  */
  private actualizaPrecios$: Subject<OperInstrumentoVO>;

  /**
   * Constructor de la clase
   **/
  constructor() {
    this.calcularPesosOperInstruVO$ = new Subject<OperInstrumentoVO>();
    this.comisionAltaOperInstruVO$ = new Subject<OperInstrumentoVO>();
    this.actualizaPrecios$ = new Subject<OperInstrumentoVO>();
  }

  /**
   * Metodo de acceso a la propiedad calcularPesosOperInstruVO$
   * @returns un obsservable a calcularPesosOperInstruVO$
   */
  public getCalcularPesosOperInstruVO$(): Observable<OperInstrumentoVO> {
    return this.calcularPesosOperInstruVO$.asObservable();
  }

  /**
   * Metodo de acceso a la propiedad comisionAltaOperInstruVO$
   * @returns un obsservable a comisionAltaOperInstruVO$
   */
  public getComisionAltaOperInstruVO$(): Observable<OperInstrumentoVO> {
    return this.comisionAltaOperInstruVO$.asObservable();
  }

  /**
   * Metodo de acceso a la propiedad actualizaPrecios$
   * @returns un obsservable a actualizaPrecios$
   */
  public getActualizaPrecios$(): Observable<OperInstrumentoVO> {
    return this.actualizaPrecios$.asObservable();
  }

  /**
   * Metodo que Establece el valor de la propiedad opiPesos
   * y de las propiedades afectadas en el momento en que cambio el valor de opiPesos
   **/
  public setTCambio(value: number, operInstruVO: OperInstrumentoVO): void {
//console.log("operInstruService.tCambio", value);
    // Valor valido y cambio el valor de la propiedad, se hacen los calculos
    if (Util.isNotNull(operInstruVO.opiTipo) && (value >= 0) && (operInstruVO.opiTcambio !== value)) {
      var valAnterior: number = operInstruVO.opiTcambio;
      var tCambioMonto: number = -1;     //  Para validar la comision.
      operInstruVO.opiTcambio = value;
      if (operInstruVO.opiMonto === 0 && operInstruVO.opiPesos !== 0) {      // Calcula Monto: opiMonto === 0
        tCambioMonto = this.calculaMonto(operInstruVO);
        if (tCambioMonto <= -1.0) {   // Comision Alta, no se puede realizar el cálculo
          operInstruVO.opiTcambio = valAnterior;
          // Notifica de Comision Alta en el objeto operInstruVO, para encio de notificacion en el componente dgOperInst
          this.comisionAltaOperInstruVO$.next(operInstruVO);
        } else {
          operInstruVO.opiMonto = tCambioMonto;
          operInstruVO.copyCosto = false;
          // Notifica cambio en el objeto operInstruVO, para recalculo del componete de pesosCanje
          this.calcularPesosOperInstruVO$.next(operInstruVO);
        }
      } else if (operInstruVO.opiMonto !== 0) {    // Calcula Pesos: opiMonto !== 0
        // se puede realizar el cálculo
        operInstruVO.opiPesos = this.calculaPesos(operInstruVO);
        operInstruVO.copyCosto = false;
        // Notifica cambio en el objeto operInstruVO, para recalculo del componete de pesosCanje
        this.calcularPesosOperInstruVO$.next(operInstruVO);
      } else {
        operInstruVO.copyCosto = false;
      }
    }
  }

  /**
   * Metodo que Establece el valor de la propiedad opiMonto
   * y de las propiedades afectadas en el momento en que cambio el valor de opiMonto
   **/
  public setMonto(value: number, operInstruVO: OperInstrumentoVO): void {
//console.log("operInstruService.Monto", value);
    // Valor valido y cambio el valor de la propiedad, se hacen los calculos
    if (Util.isNotNull(operInstruVO.opiTipo) && (value >= 0) && (operInstruVO.opiMonto !== value)) {
      var valAnterior: number = operInstruVO.opiMonto;
      var tCambioMonto: number = -1;     //  Para validar la comision.
      operInstruVO.opiMonto = value;
      if (operInstruVO.opiTcambio === 0 && operInstruVO.opiPesos !== 0) {      // Calcula Tipo Cambio: opiTcambio === 0
        tCambioMonto = this.calculaTcambio(operInstruVO);
        if (tCambioMonto <= -1.0) {   // Comision Alta, no se puede realizar el cálculo
          operInstruVO.opiMonto = valAnterior;
          // Notifica de Comision Alta en el objeto operInstruVO, para encio de notificacion en el componente dgOperInst
          this.comisionAltaOperInstruVO$.next(operInstruVO);
        } else {
          operInstruVO.opiTcambio = tCambioMonto;
          operInstruVO.copyCosto = false;
          // Notifica cambio en el objeto operInstruVO, para recalculo del componete de pesosCanje
          this.calcularPesosOperInstruVO$.next(operInstruVO);
          // dispatchEvent(new CustomEvent("changeMontoRevEvent", { bubbles: true, cancelable: false, detail: {} }));
        }
      } else if (operInstruVO.opiTcambio !== 0) {    // Calcula Pesos: opiTcambio !== 0
        // se puede realizar el cálculo
        operInstruVO.opiPesos = this.calculaPesos(operInstruVO);
        // Notifica cambio en el objeto operInstruVO, para recalculo del componete de pesosCanje
        this.calcularPesosOperInstruVO$.next(operInstruVO);
        // dispatchEvent(new CustomEvent("changeMontoRevEvent", { bubbles: true, cancelable: false, detail: {} }));

        //Calcula el tipo de costo para los reversos
        if (Util.isNotNull(operInstruVO.opiTipoReverso) && operInstruVO.opiTipoReverso !== "") {
          // Notifica actualizacion de precios
          this.actualizaPrecios$.next();
        }
      } else {
        // dispatchEvent(new CustomEvent("changeMontoRevEvent", { bubbles: true, cancelable: false, detail: {} }));
      }
    }
  }

  /**
   * Metodo que Establece el valor de la propiedad opiPesos
   * y de las propiedades afectadas en el momento en que cambio el valor de opiPesos
   **/
  public setPesos(value: number, operInstruVO: OperInstrumentoVO): void {
//console.log("operInstruService.Pesos", value);
    if (Util.isNotNull(operInstruVO.opiTipo) && (value >= 0) && (operInstruVO.opiPesos !== value)) {    //  Cambio el valor de la propiedad, se hacen calculos
      var valAnterior: number = operInstruVO.opiPesos;
      var tCambioMonto: number = -1;       //  Para validar la comision.
      var opiMontoAnterior = operInstruVO.opiMonto;    //  Para determinar si cambión el valor del monto, por ajuste de calculos
      if (operInstruVO.opiTcambio !== 0 && operInstruVO.opiMonto !== 0) {     // No aplica cambio de valor
        // Reestablece el valor "original"
        operInstruVO.opiPesos = valAnterior;
      } else if (operInstruVO.opiTcambio === 0 && operInstruVO.opiMonto !== 0) {      // Calcula Tipo Cambio: opiTcambio === 0
        operInstruVO.opiPesos = value;
        tCambioMonto = this.calculaTcambio(operInstruVO);
        if (tCambioMonto <= -1.0) {   // Comision Alta, no se puede realizar el cálculo
          operInstruVO.opiPesos = valAnterior;
          // Notifica de Comision Alta en el objeto operInstruVO, para encio de notificacion en el componente dgOperInst
          this.comisionAltaOperInstruVO$.next(operInstruVO);
        } else {
          operInstruVO.opiTcambio = tCambioMonto;
          operInstruVO.copyCosto = false;
          operInstruVO.opiPesos = this.calculaPesos(operInstruVO);
          // Notifica cambio en el objeto operInstruVO, para recalculo del componete de pesosCanje
          this.calcularPesosOperInstruVO$.next(operInstruVO);
          // dispatchEvent(new CustomEvent("changePesosRevEvent", { bubbles: true, cancelable: false, detail: {} }));
        }
      } else if (operInstruVO.opiMonto === 0 && operInstruVO.opiTcambio !== 0) {    // Calcula Monto: opiMonto === 0 y posteriormente el tipo de cambio
        operInstruVO.opiPesos = value;
        tCambioMonto = this.calculaMonto(operInstruVO);
        if (tCambioMonto <= -1.0) {   // Comision Alta, no se puede realizar el cálculo
          operInstruVO.opiPesos = valAnterior;
          // Notifica de Comision Alta en el objeto operInstruVO, para encio de notificacion en el componente dgOperInst
          this.comisionAltaOperInstruVO$.next(operInstruVO);
        } else {  // se puede realizar el cálculo
          operInstruVO.opiMonto = tCambioMonto;
          // Recalcula el tipo de cambio
          tCambioMonto = this.calculaTcambio(operInstruVO);
          if (tCambioMonto > -1.0) {
            operInstruVO.opiTcambio = tCambioMonto;
            operInstruVO.copyCosto = false;
          }
          // Notifica cambio en el objeto operInstruVO, para recalculo del componete de pesosCanje
          this.calcularPesosOperInstruVO$.next(operInstruVO);
          // Verifica si cambio el monto de la operacion, para enviar el evento correcto 
          if (opiMontoAnterior !== operInstruVO.opiMonto) {
            // dispatchEvent(new CustomEvent("changeMontoRevEvent", { bubbles: true, cancelable: false, detail: {} }));
          } else {
            // dispatchEvent(new CustomEvent("changePesosRevEvent", { bubbles: true, cancelable: false, detail: {} }));
          }
        }
      }
    }
  }

  /**
   * Metodo que Establece el valor de la propiedad opiComision
   * y de las propiedades afectadas en el momento en que cambio el valor de opiComision
   **/
  public setComision(value: number, operInstruVO: OperInstrumentoVO): void {
//console.log("operInstruService.Comision", value, operInstruVO.opiComision, operInstruVO.opiComision !== value);
    if (Util.isNotNull(operInstruVO.opiTipo) && (value >= 0) && (operInstruVO.opiComision !== value)) {    //  Cambio el valor de la propiedad, se hacen calculos
      // se puede realizar el cálculo
      operInstruVO.opiComision = value;
      operInstruVO.opiPesos = this.calculaPesos(operInstruVO);
      // Notifica cambio en el objeto operInstruVO, para recalculo del componete de pesosCanje
      this.calcularPesosOperInstruVO$.next(operInstruVO);
      // dispatchEvent(new CustomEvent("changePesosRevEvent", { bubbles: true, cancelable: false, detail: {} }));
    }
  }

  /**
   * Metodo que Establece el valor de la propiedad opiIva
   * y de las propiedades afectadas en el momento en que cambio el valor de opiIva
   **/
  public setIva(value: number, operInstruVO: OperInstrumentoVO): void {
    if (Util.isNotNull(operInstruVO.opiTipo) && (value >= 0) && (operInstruVO.opiIva !== value)) {    //  Cambio el valor de la propiedad, se hacen calculos
      // se puede realizar el cálculo
      operInstruVO.opiIva = value;
      operInstruVO.opiPesos = this.calculaPesos(operInstruVO);
      // Notifica cambio en el objeto operInstruVO, para recalculo del componete de pesosCanje
      this.calcularPesosOperInstruVO$.next(operInstruVO);
    }
  }

  /**
   * Metodo que Establece el valor de la propiedad opiTcosto
   * y de las propiedades afectadas en el momento en que cambio el valor de opiTcosto
   **/
  public setTCosto(value: number, operInstruVO: OperInstrumentoVO): void {
//console.log("operInstruService.tCosrto", value);
    if (Util.isNotNull(operInstruVO.opiTipo) && (value >= 0) && (operInstruVO.opiTcosto !== value)) {    //  Cambio el valor de la propiedad
      operInstruVO.opiTcosto = value;
      if (operInstruVO.copyCosto) {
        this.setTCambio(operInstruVO.opiTcosto, operInstruVO);
      } else {
        // Notifica cambio en el objeto operInstruVO, para recalculo del componete de pesosCanje
        this.calcularPesosOperInstruVO$.next(operInstruVO);
      }
    }
  }

  /**
   * Metodo que Establece el valor de la propiedad opiTcosto
   * y de las propiedades afectadas en el momento en que cambio el valor de opiTcosto
   **/
  public setDivisaVO(value: DivisasVO, operInstruVO: OperInstrumentoVO): void {
    if (Util.isNotNull(operInstruVO.opiTipo) && Util.isNotNull(value) && (operInstruVO.divisasVO.divId !== value.divId)) {    //  Cambio el valor de la propiedad
      operInstruVO.divisasVO = value;
      this.setTCosto(0, operInstruVO);
      this.setTCambio(0, operInstruVO);
      operInstruVO.copyCosto = true;
      // Notifica actualizacion de precios
      this.actualizaPrecios$.next();
    }
  }

  /**
   * Metodo que Establece el valor de la propiedad opiTcosto
   * y de las propiedades afectadas en el momento en que cambio el valor de opiTcosto
   **/
  public setInstrumentoVO(value: InstrumentoVO, operInstruVO: OperInstrumentoVO): void {
    if (Util.isNotNull(operInstruVO.opiTipo) && Util.isNotNull(value) && (operInstruVO.insIdVO.insId !== value.insId)) {    //  Cambio el valor de la propiedad
      operInstruVO.insIdVO = value;
      this.setTCosto(0, operInstruVO);
      this.setTCambio(0, operInstruVO);
      operInstruVO.copyCosto = true;
    }
  }

  /**
   * Metodo que calcula el monto en pesos de un operIntrumento
   * en funcion del tipo de cambio, el monto y la comision
   * Ademas considera el tipo de operacion: Si es C (Compra) Resta la comision y si es V (Venta) Suma la comision
   **/
  public calculaPesos(operInstruVO: OperInstrumentoVO): number {
    var valRet: number = 0.0;
    var signo: number;
    var comisionPesos: number;
    var ivaComision: number;

//console.log("operInstruService.CalculaPesos", operInstruVO);
    if (Util.isNotNull(operInstruVO.opiTipo)) {
      signo = operInstruVO.opiTipo === Const.TIPO_COMPRA ? -1 : 1;    // Compra = -1; Venta = 1
      comisionPesos = Util.roundingWithPrecision(operInstruVO.opiTcambio * operInstruVO.opiComision, 2, Util.NEAREST,
        true);
      ivaComision = Util.roundingWithPrecision(comisionPesos * operInstruVO.opiIva / 100, 2, Util.NEAREST,
        true);
      valRet = Util.roundingWithPrecision(operInstruVO.opiTcambio * (operInstruVO.opiMonto + (signo * operInstruVO.opiComision)), 2,
        Util.NEAREST, true);
      valRet = valRet + (signo * ivaComision);
    }
    return Util.roundingWithPrecision(valRet, 2, Util.NEAREST, true);
  }

  /**
  * Metodo que calcula el valor del Tipo de Cambio de un operIntrumento
  * en funcion del monto, la comision y el monto en pesos
  * Regresara -1 si no realiza el calculo
  **/
  public calculaTcambio(operInstruVO: OperInstrumentoVO): number {
    var valRet: number = 0.0;
    var signo: number;
    var comision: number;
//console.log("operInstruService.calculaTcambio");
    if (Util.isNotNull(operInstruVO.opiTipo)) {
      signo = operInstruVO.opiTipo === Const.TIPO_COMPRA ? -1 : 1;    // Compra = -1; Venta = 1
      comision = signo * operInstruVO.opiComision * (1 + operInstruVO.opiIva / 100);

      // Calcula Tipo Cambio: operInsVO.opiTcambio === 0
      if (operInstruVO.opiMonto <= -comision) {   // Comision Alta, no se puede realizar el cálculo
        valRet = -1;
      } else {  // Si se puede realizar el cálculo
        valRet = operInstruVO.opiPesos / (operInstruVO.opiMonto + comision);
      }
    }   // operInsVO isNotNull
    return Util.roundingWithPrecision(valRet, 6, Util.NEAREST, true);
  }   // funcion

  /**
   * Metodo que calcula el valor del Monto de un operIntrumento
   * en funcion del tipo de cambio, la comision y el monto en pesos
   * Regresara -1 si no realiza el calculo
   **/
  public calculaMonto(operInstruVO: OperInstrumentoVO): number {
//console.log("operInstruService.calculaMonto");
    var valRet: number = 0.0;
    var signo: number;
    var comision: number;
    if (Util.isNotNull(operInstruVO.opiTipo)) {
      signo = operInstruVO.opiTipo === Const.TIPO_COMPRA ? -1 : 1;    // Compra = -1; Venta = 1
      comision = signo * operInstruVO.opiComision * (1 + operInstruVO.opiIva / 100);
      // Calcula Monto: operInsVO.opiMonto === 0
      if (operInstruVO.opiPesos <= (operInstruVO.opiTcambio * comision)) {   // Comision Alta, no se puede realizar el cálculo
        valRet = -1.0;
      } else {    // se puede realizar el cálculo
        valRet = operInstruVO.opiPesos / operInstruVO.opiTcambio - comision;
      }
    }   // operInsVO isNotNull
    return Util.roundingWithPrecision(valRet, 2, Util.NEAREST, true);
  }   // funcion

  /**
   * Calcula la utilidad
   */
  public calculaUtilidad(operInstruVO: OperInstrumentoVO): number {
    let utilidad: number = 0;
    //para operaciones Fwd canceladas (7,8) no aplica utilidad
    if (operInstruVO.insIdVO.insId === Const.INSTRUMENTO_FORWARD &&
      (operInstruVO.opiEstatus === Const.FWD_ESTATUS_CANCELADA || operInstruVO.opiEstatus === Const.FWD_ESTATUS_RECHAZADA)) {
      utilidad = 0;
    } else {
      if (Util.isNotNull(operInstruVO.opiTipo)) {
        let signo: number = operInstruVO.opiTipo === Const.TIPO_COMPRA ? -1 : 1;    // Compra = -1; Venta = 1
        utilidad = (signo * operInstruVO.opiTcambio - signo * operInstruVO.opiTcosto) * operInstruVO.opiMonto;
      }
    }
    return Util.roundingWithPrecision(utilidad, 2, Util.NEAREST, true);
  }

  /**
   * Método que determina si la diferencia aplica para generar mixto, esto con base en los
   * parametros MONTO_CANJE, DIF_CANJE_MAYOR y DIF_CANJE_MENOR de la tabla i09parametro
   * Return    true:  La diferencia aplica y SI se generara el mixto
   *           false: La diferencia no aplica por estar en los parametros y NO se generara el mixto
   **/
  public diferenciaAbsorvida(monto: number, diferencia: number,
    paramMonto: number, paramDifMayor: number, paramDifMenor: number): boolean {
    var banDiferencia: boolean = true;
    if (diferencia == 0) {
      banDiferencia = false;
    } else if (monto > paramMonto && diferencia <= paramDifMayor) {
      banDiferencia = false;
    } else if (monto <= paramMonto && diferencia <= paramDifMenor) {
      banDiferencia = false;
    }
    return banDiferencia;
  }

  /**
   * Funcion que elimina una operacion del dataGrid
   * 
   * @param arrSource  arreglo que contiene la operacion a eliminar
   * @param operInstruVO Informacion del registro sobre el que se realizo el cambio
   * @param index Indice del elemento a eliminar en el arreglo
   **/
   public borrarOperacion(arrSource: Array<OperInstrumentoVO>, operInstruVO: OperInstrumentoVO, index: number): void {
    if (Util.isNotNull(operInstruVO)) {
      // Se elimina el registro del arreglo
      arrSource.splice(index, 1);

      // Notifica cambio en el objeto operInstruVO, para recalculo del componete de pesosCanje
      this.calcularPesosOperInstruVO$.next(operInstruVO);
    }
  }

  /**
   * Asigna el valor de le fecha valor y prende la bandera para que se cambie el tcambio y se recalcule los pesos
   */
  public setFValor(value: FechaValorVO, operInstruVO: OperInstrumentoVO): void {
    if (Util.isNotNull(operInstruVO.opiTipo) && Util.isNotNull(value) && (operInstruVO.fechaValorVO.idVO.fvaId !== value.idVO.fvaId)) {
      operInstruVO.copyCosto = true;
      operInstruVO.fechaValorVO = value;
    }
  }

  /**
   * Obtienen el mensaje de las operaciones de reverso y/o reversadas 
   */
  public getMsgReverso(operInstruVO: OperInstrumentoVO): string {
    var mensaje: string = "";
    if (operInstruVO.opiObserva != null) {
      if (operInstruVO.opiObserva.indexOf("Reverso del Deal") >= 0) {
        mensaje = operInstruVO.tmpDealsica + " " + operInstruVO.opiObserva.substring(1, operInstruVO.opiObserva.length - 2);
      } else if (operInstruVO.opiObserva.indexOf("Reversada con el Deal") >= 0) {
        mensaje = operInstruVO.tmpDealsica + " " + operInstruVO.opiObserva.substring(11, operInstruVO.opiObserva.length - 12);
      }
    }
    if (mensaje.trim() === Const.STR_EMPTY) {
      mensaje = operInstruVO.tmpDealsica.toString();
    }
    return mensaje.trim();
  }

}   // Termina la clase
