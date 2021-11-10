export class CreditoVO {


 /* Numero de credito */
 public creNumero:string;

 /* Linea de credito */
 public  creLinea:string;

 /* Descripcion moneda */
 public  monDescri:string;

 /* Fecha de inicio credito */
 public  creFecIni:Date;

 /* Fecha de vencimiento credito */
 public  creFecVen:Date;

 /* Monto credito */
 public  creCantid:number;
 
 /* Estatus credito */
 public  creStatus:string;
 
 /* Detalle del crédito */
 public  creDetalle:any[];
 
 /* Numero de credito */
 public  edoNumero:string;
 
 /* Fecha de inicio de Credito */
 public  edoFecIni:Date;
 
 /* Fecha final de credito */
 public  edoFecVen:Date
 
 /* Descripcion de la moneda del credito */
 public  edoDescri:string;
 
 /* Descripcion del tipo de tasa del credito */
 public  edoDesTas:string;
 
 /* Nombre completo del cliente */
 public  edoNomCom:string;
 
 /* Fecha como parametro de entrada */
 public  edoFecha:Date
 
 /* Factor moratorio */
 public  edoMorato:number;
 
 /* Abreviacion de la moneda */
 public  edoAbrevi:string;
 
 /* Tipo de Cliente  1 Persona Moral 
 *                   2 Persona Fisica Con Actividad Empresarial 
 * 					3 Persona Fisica Sin Actividad Empresarial
 */
 public  edoTipo:string;
 
 /* Fecha del vencimiento de la amortizacion */
 public  edoFecCap:Date;
 
 /* Simbolo de la moneda  */
 public  edoSimMon:string;
 
 /* Tasa de Ineres Ordinaria */
 public  edoTasOrd:string;
 
 /* Saldo a pagar */
 public  edoSalPag:number;
 
 /* Capital */
 public  edoCapital:number;
 
 /* Interes Ordinario */
 public  edoInteres:number;
 
 /* IVA */
 public  edoIVA:number;
 
 /* Saldo Insoluto */
 public  edoSalIns:number;
 
 /* Capital Vencido */
 public  edoCapVen:number;
 
 /* Intereses vencidos */
 public  edoIntVen:number;
 
 /* Intereses moratorios */
 public  edoIntMor:number;
 
 /* Dias de moratorios */
 public  edoDiaMor:number;
 
 /* Fecha para el pago */
 public  edoFecPag:string;
 
 /* Pago Total */
 public  edoPagTotal:number;
 
 /* Etiqueta Saldo */
 public  etiquetaSaldo:string;;

 /* IVA intereses moratorios */
 public  edoIVAIntMor:number;
 
 /* Saldo al día */
 public  saldoActual:number;


 /* Detalle del crédito Responsabilidad  */
 public creRespon:any[];


     constructor (

        
               
        ) {}
}