export class AtmCargaArchivoVO {
  constructor(
    public cargaId?: number,
    public formatoId?: number,
    public descFormato?: string,
    public nombreArchivo?: string,
    public numeroHojasActivas?: number,
    public fechaInicioDatos?: Date,
    public fechaFinDatos?: Date,
    public fechaLiquidacion?: Date,
    public fechaCarga?: Date,
    public usuClave?: number,
    public usuUsuario?: string
  ) {}
}
