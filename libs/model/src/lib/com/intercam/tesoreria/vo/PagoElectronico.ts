export class PagoElectronico {
  constructor(
    public pagoId?: number,
    public pagoNomArchivo?: string,
    public pagoFhGenera?: Date,
    public pagoUsuClaveGenera?: number,
    public pagoIdRel?: number,
    public sitPago?: string,
    public pagoInstId?: number,
    public pagoMonto?: number,
    public formatoId?: number
  ) {}
}