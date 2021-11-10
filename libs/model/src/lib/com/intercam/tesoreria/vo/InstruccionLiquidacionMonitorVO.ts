import { InstruccionTransferenciaVO } from './InstruccionTransferenciaVO';

export class InstruccionLiquidacionMonitorVO {
  constructor(
    public instruccionTransferenciaVO?: InstruccionTransferenciaVO,
    public folio?: number,
    public contrato?: number,
    public titular?: string,
    public fOperacion?: Date,
    public hora?: string,
    public tipo?: string,
    public divisa?: string,
    public divId?: string,
    public instBeneficiario?: string,
    public banDescCorta?: string,
    public cueCuentaBan?: string,
    public importe?: number,
    public instComentario?: string,
    public instSucLiq?: number,
    public medDescripcion?: string,
    public instRefMedio1?: string,
    public banId?: number,
    public cueId?: number,
    public medId?: number,
    public formaAutoriza?: string,
    public statusDesc?: string,
    public fValor?: Date,
    public fGenera?: Date,
    public ordenId?: number
  ) {}
}
