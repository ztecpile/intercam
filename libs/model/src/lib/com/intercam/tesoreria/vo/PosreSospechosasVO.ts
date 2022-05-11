export class PosreSospechosasVO {
  constructor(
    public id?: number,
    public fecha?: Date,
    public monto?: number,
    public num_aut?: string,
    public afiliacion?: string,
    public cuenta?: string
  ) {}
}
