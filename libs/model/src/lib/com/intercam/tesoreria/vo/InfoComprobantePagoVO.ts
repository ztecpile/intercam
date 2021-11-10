export class InfoComprobantePagoVO {
  constructor(
    public folio?: number,
    public status?: string,
    public formato?: number,
    public fecha?: Date,
    public usuario?: string,
    public deal?: number
  ) {}
}
