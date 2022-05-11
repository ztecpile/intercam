export class MovBancariosSICAVO {
  constructor(
    public folio?: number,
    public claveBanco?: string,
    public divisa?: string,
    public fechaRegistro?: Date,
    public tipoMovimiento?: string,
    public monto?: number,
    public referencia?: string,
    public concepto?: string,
    public descripcion?: string,
    public status?: number,
    public sbf?: string,
    public cliente?: string,
    public refTraspaso?: string
  ) {}
}
