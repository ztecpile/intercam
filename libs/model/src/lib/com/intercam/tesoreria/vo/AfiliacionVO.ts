export class AfiliacionVO {
  constructor(
    public afiliacionId?: string,
    public colonia?: number,
    public contrato?: number,
    public divisa?: string,
    public nombre?: string,
    public domicilio?: string,
    public comisionDebito?: number,
    public comisionCredito?: number,
    public giro?: number,
    public fechaAlta?: Date,
    public fechaBaja?: Date,
    public estatus?: string,
    public longitud?: string,
    public latitud?: string,
    public numExt?: string,
    public numInt?: string,
    public folioInt?: string,
    public numEmpleado?: string,
    public usuario?: string,
    public fhRegistro?: Date,
    public personaId?: number,
    public personaContratoDesc?: string,
    public coloniaDesc?: string,
    public codigoPostal?: string,
    public divisaDesc?: string,
    public perfilComercial?: string,
    public altoRiesgo?: string,
    public procom?: string,
    public estatusProcom?: string,
    public numTerminal?: number
  ) {}
}
