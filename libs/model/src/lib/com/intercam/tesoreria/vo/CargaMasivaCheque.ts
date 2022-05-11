export class CargaMasivaCheque{

    constructor(
        public numChe?: number,
        public mapId?: number,
        public divId?: string,
        public fechaCarga?: Date,
        public estatus?: string,
        public usuCve?: string,
        public fhRegistro?: Date,
        public banDescCorta?: string
    ){}
}