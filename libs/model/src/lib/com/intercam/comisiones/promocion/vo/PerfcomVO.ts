import { DivisasTraderVO } from "./DivisasTraderVO";
import { PerfilConsolidadoVO } from "./PerfilConsolidadoVO";

export class PerfcomVO {

  constructor(
    public prfNumero?:number,
    public clvEmp?:number,
    public desEmpresa?:string,
    public clvSuc?:string,
    public tacNumero?:number,
    public desTblComisiones?:string,
    public tacNemonico?:string,
    public clvPro?:string,
    public nombrePromotor?:string,
    public prfProequiv?:string,
    public prfPorcent?:number,
    public prfTipopag?:string,
    public desTipoPago?:string,
    public prfMinger?:number,
    public prfClasepro?:string,
    public prfTipopro?:string,
    public desModoPago?:string,
    public prfRegimenp?:number,
    public prfApoderado?:number,
    public prfFacturaa?:number,
    public prfProvedor?:number,
    public prfDesprov?:string,
    public prfPromconsol?:string,
    public prfFasignac?:Date,
    public prfHoraasig?:string,
    public prfUsrasigna?:string,
    public prfFvigencia?:Date,
    public prfNumtabv?:string,
    public prfStatus?:number,
    public desEstatus?:string,
    public prfCnomina?:string,
    public prfCcosto?:number,
    public prfDivisa?:string,
    public prfMesa?:number,
    public prfClasificacion?:string,
    public empresasConsolidadas?:PerfilConsolidadoVO[],
    public divisasTrader?:DivisasTraderVO[],
    public nomTblForwards?:string,
    public nombreClvDA?:string,
    public numEmpleado?:string,
    public perId?:number
  ){}

}
