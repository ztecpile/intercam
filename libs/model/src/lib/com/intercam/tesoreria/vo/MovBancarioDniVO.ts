export class MovBancarioDniVO {
  constructor(
    public folio?: number,
    public cveBanco?: string,
    public divisa?: string,
    public fecha?: Date,
    public tipMovimiento?: string,
    public monto?: number,
    public referencia?: string,
    public status?: number,
    public cveCliente?: string,
    public nomCliente?: string,
    public concilia?: string,
    public sbf?: string,
    public promotor?: string,
    public descripcion?: string,
    public tipoDeposito?: string,
    public conSelected?: boolean
  ) {}
}
