import { formatDate } from "@angular/common";
import { Const } from "./Const";

export class Util {

  /**
   * Rounds a number up or down to the nearest integer
   */
  public static readonly NEAREST = 'NEAREST';

  /**
   * Hace un clon de un objeto dado, mediante el procerso de serializacion y deserializacion 
   * Nota: para utilizar este metodo se requiere que la clase del objeto a clonar sea serializable.
   *
   * @param objeto el objeto a clonar
   * @return Object: objeto ya clonado
   */
  public static clonar<T>(objeto: T): T {
    return JSON.parse(JSON.stringify(objeto))
  }

  /**
   * Obtiene el tipo de dato de un objeto determinado
   * @param obj Objeto a obtener su tipo de dato
   * @returns Tipo de Dato
   */
  public static toType = function(obj) {
    return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
  }

  /**
   * Remplaza en una cadena el texto de la forma {n} por el correspondoente valor dado en la n_esima posicion del arreglo 
   *    Ejemplo: Util.getMsg("Cadena con parametros: {0} y {1} ", [valor1, valor2]);
   * @param msg mensaje base
   * @param params valores a reemplazar en el mensaje
   * @returns Cadena con los valores remplazados
   */
  public static getMsg(msg: string, params:Array<any>): string {
    let msgFinal = msg;
    let size: number = params.length;

    for (let index = 0; index < size; index++) {
      let value: any = params[index];

      msgFinal = msgFinal.replace( '{'.concat(index.toString()).concat('}'), 
        typeof(value) === 'string' ? value : value.toString());
    }
    return msgFinal;
  }

  /**
   * Valida si un objeto de tipo <T> esta indefinido o es null
   */
   public static isNull<T>(valor: T): boolean {
    return (valor === undefined || valor === null);
  }

  /**
   * Valida si un objeto de tipo <T> esta definido y es diferente de null
   */
  public static isNotNull<T>(valor: T): boolean {
    return (valor !== undefined && valor !== null);
  }

  /**
   * Verifica si la cadena es nula, regresa una cadena vacia.
   * 
   * @param strString cadena a evaluar 
   * @return La cadena
   **/
  public static checkNulltoZero(value: number): number {
    let result: number = Const.CERO;
    if (value !== undefined && value !== null) {
      result = value;
    }
    return result;
  }

  /**
   * Verifica si la cadena es nula, regresa una cadena vacia.
   * 
   * @param strString cadena a evaluar 
   * @return La cadena
   **/
  public static checkStrNulltoEmpty(strString: string): string {
    let result: string = Const.STRING_EMPTY;

    if (strString !== undefined && strString !== null) {
      result = strString.trim();
    }
    return result;
  }

  /**
   * Verifica si la cadena es nula, regresa una cadena vacia
   * @param strString cadena a evaluar 
   * @return La cadena
   **/
  public static checkStrEmptytoNull(strString: string): string {
    var result: string = null;

    if (this.isNotNull(strString) && strString.trim() !== Const.STRING_EMPTY) {
      result = strString;
    }
    return result;
  }

  /**
   * Metodo que ordena los pagos de acuerdo a un campo dado y un tipo de orden (Ascendente/Descendente)
   * @param arrOrg:       arreglo a ordenar
   * @param lstNameField: nombre del campo por el cual se hara el ordenamiento, por defecto es paoEstatus
   * @param typeOrder:    tipo o forma de ordenamiento deseada, por defecto es "A" (Ascendente), 
   *                      cualquier otro valor sera Descendente
   * 
   * @return arreglo de pagos ordenado
   */
  public static sortArray<T>(arrOrg: Array<T>, lstNameField: Array<string>, typeOrder: string = "A"): Array<T> {

    return arrOrg.sort((object1, object2) => {
      let valRetorno: number = 0;
      for (const nameField of lstNameField) {
        let value1 = object1[nameField];
        let value2 = object2[nameField];
        if ((value1 !== value2)) {
          if ("A" === typeOrder) {
            return ((value1 > value2) ? 1 : -1);
          } else {
            return ((value1 < value2) ? 1 : -1);
          }
        }
      }
      return valRetorno;
    });
  }

  /**
   * Obtiene el indice dentro de un Array, donde se encuentra el elemento con un valor proporcionado.
   *    Funciona para campos compuestos separados por un punto (.)
   *      Ejem. El arreglo tiene objetos de tipo ContratoPersonaVO y se requiere que se posicione 
   *            de acuerdo al perId de la persona asociada, entonces el atributo campo recibe 'idVO.perId'.
   * @param array       Arreglo a 
   * @param valorBuscar Valor que debe tener la propiedad
   * @param campo       Nombre del campo o propiedad a evaluar
   * @returns La posicion del elemento con el valor proporcionado en el arreglo
   *          -1 si no hubo coincidencia
   */
  public static getIndiceArr<T>(array: Array<T>, valorBuscar: Object, campo: string): number {
    let result: number = -1;
    let i: number = 0;

    while (i < array.length && result === -1) {
      if (valorBuscar === array[i][campo]) {
        result = i;
      }
      ++i;
    }
    return result;
  }

  /**
  * Funcion semi-generica (estraida del PresetComboBox) para obtener indice dentro de un dataProvider(array)
  * donde se encuentra el elemento con un valor proporcionado.
  * Funciona para campos compuestos separados por un punto (.) . 
  * Ejem. El combo objetivo en su dataProvider tiene objetos de tipo ContratoPersonaVO y se requiere que se 
  * posicione de acuerdo al perId de la persona asociada, entonces el atributo campo recibe 'idVO.perId'.
  * 
  * Esta funcion puede ser usada con los taggedComboBox mientras se les implementa la funcionalidad
  * presetValue(posicionar el combo Box al elemento con valor especifico).
  * $OJO$ cbObjetivo.labelField es la descripcion, pero debe ser unica,
  * para resultados seguros debe usarse el "campo" que corresponde al Id.
  */
    public static getIndice (arrDataprovider : any[], dataLabel: any, valorBuscar : any, 
            campo : string = null) : number {
    let result : number = -1;
    //Busca por labelField
    if (campo === null) {
        /*$OJO$ cbObjetivo.labelField es la descripcion, pero debe ser unica,
        * para resultados seguros debe usarse el "campo" que corresponde al Id.
        */
        result = this.getIndiceArr(arrDataprovider, valorBuscar, dataLabel);
    }
    else { //Busca por campo.
        result = this.getIndiceArr(arrDataprovider, valorBuscar, campo);
    }
    return result;
}

  /**
   * Compara dos fechas solo considera dia/mes/año
   *    (No considera el tiempo) 
   * 
   * @param date1 Fecha 
   * @param date2 Fecha  
   * @returns Numero positivo (>0) si date1 > date2
   *                 negativo (<0) si date1 < date2 
   *                 cero (0) si date1 = date 2
   */
  public static compareDate(date1: Date, date2: Date): number {
    let _date1 = new Date(date1);
    let _date2 = new Date(date2);

    _date1.setHours(0,0,0,0);
    _date2.setHours(0,0,0,0);
    
   return _date1.getTime() - _date2.getTime();
  }

  /**
   * Asigna el formato dd-MM-yy a una fecha determinada
   * 
   * @param date Fecha a formatear
   * @returns Fecha con formato
   */
  public static formatDateDDMMYYYY(date: Date): string {
    return formatDate(date,'dd/MM/yyyy', 'en');
  }
  
  /**
   * Formato numerico con redondeo hacia arriba de k_decimales
   * @param value Valor a formatear
   * @param precision Numero de digitos decimales
   *                  Por default redondea a 2 decimales
   * @returns String con el numero con redondeo a los decimales establecidos
   */
   public static formatNumber (value: number, precision: number = 2): string {
    return Intl.NumberFormat('es-MX',
                            {'maximumFractionDigits': precision,
                             'minimumFractionDigits': precision}).format(value);
  }

  /**
   * Formato de Moneda Nacional, con redondeo hacia arriba de k_decimales 
   * @param value Valor a formatear
   * @param precision Numero de digitos decimales
   *                  Por default redondea a 2 decimales
   * @returns String con el numero con formato de pesos y con redondeo a los decimales establecidos
   */
  public static formatCurrency (value: number, precision: number = 2): string {
    return Intl.NumberFormat('es-MX',
                            {'style':'currency',
                             'currency': 'MXN',
                             'maximumFractionDigits':precision}).format(value);
  }

  /**
   * 
   * @param value Da formato a un numero previamente truncado a la precion establecida
   * @param precision Numero de digitos decimales
   *                  Por default redondea a 2 decimales
   * @returns String con el numeto con formato
   */
  public static numberFormatTrunc(value: number, precision: number = 2): string {
    return this.formatNumber(Util.numberTrunc(value, precision),precision);
  }

  /**
   * Trunca un numero decimal a k_decimales establecidos
   * @param value Numero a truncar
   * @param precision Numero de digiotos decimales
   *                  Por default redondea a 2 decimales
   * @returns numero truncado a los decimales establecidos
   */
  public static numberTrunc(value: number, precision: number): number {
    let numPower: number = Math.pow(10, Math.abs(precision)); 
    return ~~(value * numPower)/numPower;
  }
  
  /**
   * 
   * @param value Da formato a un numero previamente truncado a la precion establecida
   * @param precision Numero de digitos decimales
   *                  Por default redondea a 2 decimales
   * @returns String con el numeto con formato
   */
   public static numberFormatTruncBase1(value: number, precision: number = 2): string {
    return this.formatNumber(value,precision);
  }

  /**
  * Convierte un String con formato (separador de miles y de decimales) en numerico.
  * 
  * @param valueStr Cadena que representa un n&uacute;mero con formato y
  * que ser&aacute; convertida en n&uacute;mero; si es vacio se convierte a 0.
  * @return La cadena convertida en número o cero, si la cadena no representa un número
  */
  public static getNumberValue(valueStr: string): number {
    var myPattern: RegExp = /,/g;
    var newStrValue: string = valueStr;
    newStrValue = newStrValue.replace(myPattern, "");

    return isNaN(Number(newStrValue)) ? 0 : Number(newStrValue);
  }

  /**
   * Redondea o trunca un numero con precision y redondeo especificos.
   * Los posibles valoes de redondeo son los definidos por mx.formatters.NumberBaseRoundType.
   * 
   * @param value Valor a redondear.
   * @param precision n&uacute;mero que establece la precision (decimales a utilizar)
   * @param roundType Tipo de redondeo ('NONE', 'UP', 'DOWN', or 'NEAREST')
   * @return n&uacute;mero redondeado.
   *
   */
  public static roundingWithPrecision(value: number, precision: number, roundType: string = 'NEAREST',
    aplicaConstante: boolean = false): number {
    // precision works differently now. Its default value is -1
    // which means 'do not alter the number's precision'. If a precision
    // value is set, all numbers will contain that precision. Otherwise, there
    // precision will not be changed.
    let monto: number = value;

    // If rounding is not present and precision is NaN, leave value untouched.
    if (roundType === 'NONE') {
      if (precision === -1) {
        return value;
      }
    } else {
      if (aplicaConstante) {
        monto = monto + Const.excelFactor;
      }

      // If rounding is present but precision is less than 0, then do integer rounding.
      if (precision < 0) {
        precision = 0;
      }

      // Shift decimal right as Math functions perform only integer ceil/round/floor.
      monto = monto * Math.pow(10, precision);

      // Attempt to get rid of floating point errors
      monto = Number(monto.toString());

      if (roundType === 'UP') {
        monto = Math.ceil(monto);
      }
      else if (roundType === 'DOWN') {
        monto = Math.floor(monto);
      }
      else if (roundType === 'NEAREST') {
        monto = Math.round(monto);
      }
      else {
        return 0;
      }
      // Shift decimal left to get back decimal to original point.
      monto = monto / Math.pow(10, precision);
    }

    return monto;
  }
  
  /**
   * Método para obtener el valor total de algun campo de los objetos de un  ArrayCollection
   * @param arrToSum      El arrayCollection a obtener la suma de sus elementos
   * @param fieldToSum    Campo por el cual se realizara la suma
   * 
   * @return suma     suma total
   */
  public static sumToArray<T>(arrToSum: Array<T>, fieldToSum: string): number {
    let suma: number = 0;
    for (const object of arrToSum) {
      suma += +object[fieldToSum]
    }
    
    return Util.roundingWithPrecision(suma, 2, "NEAREST", true);
  }

  /**
   * Calcula la diferencia entre dos montos determinados 
   *    y el resultado lo redondea a 2 decimales
   * @param minuendo Monto inicial
   * @param sustraendo Monto a Restar
   * @returns diferencia redondeada a 2 decimales
   */
  public static getDifMontos(minuendo: number, sustraendo: number): number {
    return Util.roundingWithPrecision(minuendo - sustraendo, 2, "NEAREST", true);
  }

  /**
   * Elimina todos los elementos de un arreglo
   * @param array Arreglo a eliminar todos sus elementos
   * @returns 
   */
  public static removeAll<T>(array: Array<T>): Array<T> {
    return array.splice(0, array.length);
  }

/**
  * Metodo que maneja el evento textEvent, el cual se dispara cuando se modifica el texto del componente
  * Este metodo se utiliza para validar que los caracteres capturados son los correctos y estan
  * el la posicion correcta para representar un numero válido.
  **/
 public static validIsNumber(value: string): string {

/*
  var ini:int = textField.selectionBeginIndex;
  var tam:int = textField.selectionEndIndex - ini;
  var textTmp:String = new String(text);

  textTmp = textTmp.replace(textTmp.substr(ini, tam), "");
  // Valida si el unico caracter de menos, regresa el texto "-0" con el cero seleccionado
  if( textTmp === "" && event.text === "-" && negativo){
      event.preventDefault();
      text = "-0";
      setSelection(text.length - 1, text.length);
  }
  // Valida si el unico caracter es punto decimal, regresa el texto "0."
  else if((textTmp === "" || textTmp ==="-") && event.text === "."){
      event.preventDefault();
      text = textTmp + "0.";
      setSelection(text.length + 1, text.length + 1);
  }
  // Valida: que sólo se pueda capturar un solo signo de menos (-) y que sea en la primera posicion.
  //      Y  que solo se pueda capturar un ponto decimal (.) y este no se coloque antes del signo de menos.
  //      Y  que no admita espacios
  else if( (textTmp.indexOf("-")>-1 && event.text.indexOf("-")>-1) ||
      (event.text.indexOf("-")>-1 && event.text.split("-").length>2) ||
      ((ini != 0)&& event.text.indexOf("-")>-1) ||
      (textTmp.indexOf(".")>-1 && event.text.indexOf(".")>-1) ||
      (event.text.indexOf(".")>-1 && event.text.split(".").length>2) ||
      (ini===0 && textTmp.indexOf("-")===0) ||
      (event.text.indexOf(" ")>-1) ){
      event.preventDefault();
  }
  // Valida: que si no son numeros, ni punto, ni menos, no reemplaza la informacion seleccionada
  //      Y  que si no se admiten numeros negativos y se tecleo el simbolo -,
  //         no reeplace la informacion seleccionada si se
  else if( (isNaN(Number(event.text)) && event.text != "." && event.text != "-" && negativo) ||
      (isNaN(Number(event.text)) && event.text != "." && !negativo) ){
      event.preventDefault();
  }
  // Valida que tanto el texto como el evento representen numeros
  else if( isNaN(Number(textTmp)) && isNaN(Number(event.text)) ){
      event.preventDefault();
  }

*/ 
  return value
}
	/**
		 * Convierte una cadena vacia a null.
		 * 
		 * @param strData Cadena a verificar si es vacia y convertirla en <code>null</code>.
		 * @return NULL si strData es la cadena vacia, strData en otro caso.
		 */
   public static  emptyToNull(strData:string):string {
    if(strData !=null){
       return strData.trim() == '' ? null : strData;                 
    }else{
       return null;
    }
}   

public static validarNumeroPositivo( item : number) : boolean {
  var numPositivo : boolean = true;
  
  if (this.isNull(item)) {
      numPositivo = false;
  } else if (item < 0) {
      numPositivo = false;
  }
  
  return numPositivo;
}

} // Termina la clase