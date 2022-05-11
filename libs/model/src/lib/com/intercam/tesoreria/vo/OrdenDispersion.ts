export class OrdenDispersion{

    constructor(
        public dispersionId?: number,
        public conId?: number,
        public beneficiario?: string,
        public cuenta?: string,
        public divId?: string,
        public monto?: number,
        public banco?: string,
        public status?: string,
        public nombreArchivo?: string,
        public fhRegistro?: Date,
        public usuClave?: number,
        public hashArchivo?: string,
        public ordenId?: number,
        public descError?: string,
        public instFOper?: Date,
    ){}
}