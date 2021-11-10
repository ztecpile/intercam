import { InstruccionTransferenciaVO } from './InstruccionTransferenciaVO';

export class InstruccionComprobantesPagosVO {
  constructor(
    public instruccionTransferenciaVO?: InstruccionTransferenciaVO,
    public folio?: number,
    public contrato?: number,
    public titular?: string,
    public fOperacion?: Date,
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
    public formaAutoriza?: string,
    public statusDesc?: string,
    public fValor?: Date,
    public fGenera?: Date,
    public ordenId?: number,
    public email?: string,
    public iCtaNostro?: string,
    public iCtaClbCliente?: string,
    public iCtaCliente?: string,
    public iPagoSPEIId?: string,
    public desFormato?: string,
    public formatoId?: number,
    public envio?: number
  ) {}
}
