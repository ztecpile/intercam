export class AtmArbitrosVO {
  constructor(
    public arbitroId?: number,
    public cargaId?: number,
    public descripcion?: string,
    public montoDebito?: number,
    public montoCredito?: number,
    public montoSaldo?: number,
    public divisa?: string,
    public numeroHoja?: number
  ) {}
}
