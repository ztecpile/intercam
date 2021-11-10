import {ConsultaInversionesVO} from '@intercam/model';
import {ConsultaSaldoBloqueadoVO} from '@intercam/model';
export class ConsultaSaldoVO {
/**
        	 * Numero de cuenta.
        	 */
 public  cuenta:string;
 /* Moneda */
 public moneda:string;
 /* Tipo */
 public tipo:string;
 /* Status */
 public  status:string;
 /* Saldo */
 public  saldo:number;
 /* Disponible */
 public  saldoDisponible:number;
 /* Salvo Buen Cobro */
 public  salvoBuenCobro1:number;
 /* Salvo Buen Cobro */
 public  salvoBuenCobro2:number;
 /* Remesas Retenidas */
 public remesasRetenidas:number;
 /* Saldo Retenido */
 public retenido:number;
 /* Inversiones Vigentes */
 public inversiones:ConsultaInversionesVO[];
 /* Total Inversiones Pesos */
 public  totalInversionesPesos:number;
 /* Total Inversiones Dolares */
 public  totalInversionesDolares:number;
 /* Saldo de la Línea Clic Express */
 public  Lin_Saldo:number;
 /* Status de la línea de crédito */
 public  Lin_Status:string;
 /* Saldos Bloqueados */
 public saldosBloqueados:ConsultaSaldoBloqueadoVO[];
 /* Creditos Vencidos */
 public  creditosVencidos:any[];
 /* Creditos por Vencer */
 public creditosPorVencer:any[];
 /* Numero Moneda */
 public  numMoneda:string;
 /* Tipo Cuenta */
 public  tipoCuenta:string;
 /**
  * Saldo linea de sobregiro
  */
 public  lineaSobregiro:number;
 /**
  * Saldo divisas
  */
 public  saldoDivisas:number;

    constructor (

        
               
 ) {}

}