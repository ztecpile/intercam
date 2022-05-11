export class TipoTerminalVO{
    constructor(
        public tipoTerminalId?: string,
        public descripcion?: string,
        public usuario?: string,
        public fhRegistro?: Date,
    ){}
}