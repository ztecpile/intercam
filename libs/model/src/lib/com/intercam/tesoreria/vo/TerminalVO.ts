export class TerminalVO {
  constructor(
    public terminalId?: number,
    public tipoTerminal?: string,
    public afiliacion?: string,
    public numTerminal?: string,
    public estatus?: string,
    public usuario?: string,
    public fhRegistro?: Date,
    public tipoTerminalDesc?: string,
    public afiliacionComercioDesc?: string
  ) {}
}
