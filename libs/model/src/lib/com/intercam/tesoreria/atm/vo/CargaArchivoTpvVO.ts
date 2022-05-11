export class CargaArchivoTpvVO{

    constructor(
        public cargaId ?: number,
        public divisa ?: String,
        public formato ?: number,
        public descFormato ?: String,
        public nombreArchivo ?: String,
        public fecha ?: Date,
        public fhRegistro ?: Date,
        public usuClave ?: number,
        public usuUsuario ?: String

    ){}
}