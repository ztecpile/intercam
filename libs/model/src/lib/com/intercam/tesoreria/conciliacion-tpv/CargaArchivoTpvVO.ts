export class CargaArchivoTpvVO {
  constructor(
    public cargaId?: number,
    public divisa?: string,
    public formato?: number,
    public descFormato?: string,
    public nombreArchivo?: string,
    public fecha?: Date,
    public fhRegistro?: Date,
    public usuClave?: number,
    public usuUsuario?: string
  ) {}
}
