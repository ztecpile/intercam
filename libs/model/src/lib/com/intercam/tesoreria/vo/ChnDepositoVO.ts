export class ChnDepositoVO {
  constructor(
    public chnOpe?: number,
    public chnCheque?: number,
    public chnBeneficiario?: string,
    public chnImporte?: number,
    public chnMotivo?: number,
    public chnDescMotivo?: string,
    public chnObservacion?: string,
    public chnFecha?: Date,
    public chnUsuario?: string,
    public chnEstatus?: string
  ) {}
}
