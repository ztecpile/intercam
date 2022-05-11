export class CuentaTesoreriaDniVO {
  constructor(
    public cuentaId?: number,
    public divId?: string,
    public empresaId?: number,
    public banId?: number,
    public cueId?: number,
    public cuentaBanco?: string,
    public bancoOrigen?: string
  ) {}
}
