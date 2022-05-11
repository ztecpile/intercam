export class MovimientosFXPremiumVO {
  constructor(
    public folio?: number,
    public cuentaAbono?: string,
    public monto?: number,
    public divisa?: string,
    public traspaso?: number,
    public banco?: string,
    public cuentaCargo?: string,
    public folioTransaccion?: string,
    public fechaRegistro?: Date,
    public mensaje?: string,
    public contrato?: number
  ) {}
}
