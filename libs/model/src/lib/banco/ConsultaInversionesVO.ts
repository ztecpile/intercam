
export class ConsultaInversionesVO {





public  cantidad:number;
public  fechaInicio:Date;
public fechaVencimiento:Date;
public  monedaDescri:string;
public  tasa:number;
public  tasaBruta:number;
public  numeroInversion:string;
public  movDescripcion:string;
public  cuenta:string;
public  status:string;
public  cveStatus:string;

/**
 * Tipo de contratro
 */
public  tipoContrato:string;


/**
 *Tipo persona
 */
public  tipoPersona:string;


/**
 * Hora de actualización
 */
public  horaActualiza:Date;

/**
 * Promotor
 */
public  promotor:string;

/**
* Sucursal Promotor
*/
public  sucPromotor:string;


public  tipoPersonaActi:string;

public  comentario:string;

/**
* Fecha del sistema
*/
public  fechaSis:Date;

/**
* Numero de Contrato que ampara la inversion 
*/
public numeroCto:string; 

/**
* Tasa de ISR
*/
public  tasaIsr:number;

/**
* Fecha vencimiento del periodo 
*/
public  fechaPer:Date;

/**
* Plazo de la inversion en Meses
*/
public  plazo:string;

/**
* Interes bruto
*/
public  interesBruto:number;

/**
* Interes Neto
*/
public  interesNeto:number;


/**
* Dias de vencimiento
*/
public  diasVence:number;

/**
* Dias del credito
*/
public diasCredito:number;

/**
* Cuenta Beneficiario
*/
public  cuentaBenef:string;

/**
* Nombre de beneficiario
*/
public  nomBenef:string;

constructor (

        
               
    ) {}
   

}