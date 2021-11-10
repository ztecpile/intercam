export class BitacoraCambio {
    constructor(
        public idBitacora?: number,
        public bitTabla?: string,
        public bitOldRegistro?: string,
        public bitRegistroNuevo?: string,
        public bitFhRegistro?: Date,
        public usuClave?: number,
        public bitTablaPk?: number,
        public instId?: number,
        public bitSesion?: string,
        public usuUsuario?: string
    ) {}
  }
