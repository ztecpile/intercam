export class DetalleCorreo {
  constructor(
    public detId?: number,
    public detNombre?: string,
    public gpoId?: number,
    public gpoDescripcion?: string,
    public detCorreo?: string,
    public detStatus?: string,
    public detBanId?: number,
    public detBanDesc?: string,
    public gpoClave?: string
  ) {}
}
