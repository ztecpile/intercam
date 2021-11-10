import { MensajeriaOperacionInstrVO } from './MensajeriaOperacionInstrVO';
export class OperacionInstruccionVO {

/**
		 * Fecha de la Operacion
		 */
 public fechaOpe : Date;
 /**
  * Tipo de Operacion
  * S - Viene (a Sucursal)
  * M - Vamos (con Mensajero)
  */
 public tipoOpe :  string;
 /**
  * Descripcion tipo de operacion
  */
 public tipoOpeDesc :  string;
 /**
  * Donde Termina la Operacion:
  * V - Ventanilla
  * P - Plataforma
  */
 public tipoLiq :  string;
 /**
  * Sucursal de Liquidacion SICA para la Mensajeria
  */
 public sucLiquida :  string;
 /**
  * Numero de Cheque de la Operacion de Entrada
  */
 public chequeEnt :  string;
 /**
  * Numero de Cheque de la Operacion de Salida
  */
 public chequeSal :  string;
 /**
  * Usuario que Autoriza la Operacion
  */
 public usuarioAut :  string;
 /**
  * información mensajeria
  */
 public mensajeria : MensajeriaOperacionInstrVO;
 /**
  * Motivo de Cancelacion
  */
 public motivo :  string;
 /**
  * Folio de la operacion, sirve como llave para liquidar la operacion en Ventanilla
  */
 public folio :  string;
 /**
  * Promotor Origen
  */
 public promOrigen :  string;
 /**
  * Promotor Atiende
  */
 public promAtiende :  string;
 /**
  * Clave de Operacion de Entrada
  */
 public cveOpeEnt :  string;
 /**
  * Numero de Cuenta de la Operacion de Entrada
  */
 public numCtaEnt :  string;
 /**
  * Moneda de Entrada
  */
 public monedaEnt :  string;
 /**
  * Referencia de Entrada
  */
 public referenciaEnt :  string;
 /**
  * Clave de Operacion de Salida
  */
 public cveOpeSal :  string;
 /**
  * Numero de Cuenta de la Operacion de Salida
  */
 public numCtaSal :  string;
 /**
  * Moneda de Salida
  */
 public monedaSal :  string;
 /**
  * Referencia de Salida
  */
 public referenciaSal :  string;
 /**
  * Monto de la Operacion
  */
 public  monto :  number;
 /**
  * Numero de transaccion unico del sistema, sera el mismo que folio
  */
 public numTransac :  string;
 /**
  * Transaccion
  */
 public transaccio :  string;
 /**
  * Usuario
  */
 public usuario :  string;
 /**
  * Fecha
  */
 public  fechaSis : Date;
 /**
  * Sucursal Origen
  */
 public sucOrigen :  string;
 /**
  * Sucursal Destino
  */
 public sucDestino :  string;
 /**
  * Modulo
  */
 public modulo :  string;    
 /**
  * Tipo de movimiento
  * 1.ENTRADA EFECTIVO CON ABONO CUENTA
  * 2.CARGO A CUENTA CON SALIDA EFECTIVO
  * 3.CARGO A CUENTA CON ABONO A CUENTA
  * 4.CARGO A CUENTA CON SALIDA POR SPEI
  */
 public tipMov :  string;
 /**
  * Estatus de la Operacion
  *  A       Alta
  *  N       En Proceso
  *  C       Cancelada
  *  X       Rechazada
  *  P       Procesada
  *  R       Reversada                       
  */
 public status :  string;
 /**
  * clave del status
  */
 public cveStatus :  string;
 /**
  * Especifica si un elemento debe de estar seleccionado.
  */
 public conSelected :   boolean = true; 
 /**
  * Deal operacion SICA
  */
 public dealOp :  number;
 /**
  * OpiId operacion SICA
  */
 public opiId :  number;
 /**
  * Pago operacion SICA
  */
 public paoId : number;
 /**
  * Benficiario ctaEnt 
  */
 public beCueEnt :  string;
 /**
  * Benficiario ctaSal
  */
 public beCueSal :  string;
 /**
  * Ope_id operacion SICA
  */
 public opeId :  number;
 /**
  * identificador del tipo contrato
  */
 public tconId :  number;
 
 
 /**
  * Tipo Persona
  */
 public tipoPersona : string;
 /**
  * Descripcion de la Opercacion viene de VEOPCPOS
  */
 public opeDesc :  string ;
 
 /**
  * Numero de DEAL (compra/venta de divisas)
  */
 public deal :  string;
 
 /**
  * Tipo de cambio del DEAL
  */ 
 public tipo_cambio :  number;
 
 /**
  * Monto para realizar DEAL
  */ 
 public monto_origen :  number;
 
 
 /**
  * Importe comisión
  */
 public montoComisionBt :  number;
 
 /**
  * IVA comisión
  */
 public ivaComisionBt :  number;
 /**
  * Importe servicio mensajeria
  */
 public montoMsgComisionBt :  number;
 
 /**
  * IVA servicio mensajeria
  */
 public ivaMsgComisionBt :  number;
 

 /**
  * coinIdComision
  */
 public coinIdComisionBt :  number;
 /**
  * coinIdComision
  */
 public coinIdMsgBt :  number;	
 
 /**
  * coinIdComision
  */
 public oppIdLiquida :  number;	
 /**
  * tipo de transaccion
  */
 public tipoTransaccion :  string;
 /**
  * tasa
  */
 public tasa :  number;
 /**
  * tasa bruta
  */
 public tasaBruta:  number;
 
 /**
  * Tipo de contratro
  */
 public tipoContrato :  string ;
 
 /**
  * comentario
  */
 public comentario :  string ;
 
 /**
  * Objecto que contiene transfer seleccionada para 
  * Transferencia internacional.
  */
 public terceroVo : any; 
 
 /**
  * motivoPago
  */ 
 public motivoPago : any;
 
 /**
  * cadena abierta 
  * para la opcion OTRO de motivo pago
  */
 public otroMotivoPago :  string;

 /**
  * cadena abierta 
  * para guardar nombres de posibles archivos.
  */
 public listaDocumentos :  string;
 
 /**
  * indica si se requiere enviar alerta de pais alto riesgo
  */
 public isPaisAltoRiesgo :  boolean;
 
 /**
  * cadena con id de Propositos de Operacion
  */
 public oppOrden :  number;
 


 
    constructor( ) {
        this.mensajeria = new MensajeriaOperacionInstrVO();
        this.numCtaSal = null;
        this.numCtaEnt = null;
    }
}