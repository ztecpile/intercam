export class PenalizacionVO {
  constructor(
    public penId?: number,
    public conId?: number,
    public cliente?: string,
    public medId?: number,
    public medioOrigenDesc?: string,
    public tipeId?: number,
    public tipoPenalizacionDesc?: string,
    public perId?: number,
    public promotor?: string,
    public penInstruccion?: number,
    public penDivId?: string,
    public penMontoDivisa?: number,
    public penMontoPesos?: number,
    public penFechaOpe?: Date,
    public penFechaSistema?: Date,
    public penMontoPenalizacion?: number,
    public penTasa?: number,
    public penStatus?: string
  ) {}
}
