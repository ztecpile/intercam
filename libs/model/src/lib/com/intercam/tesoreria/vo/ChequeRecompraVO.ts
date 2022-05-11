export class ChequeRecompraVO{
    constructor(
        public folio?: number,
        public clvOpe?: number,
        public clvSucursal?: string,
        public clvBanco?: string,
        public numCheque?: number,
        public fecha?: Date,
        public rcoUsuario?: string,
        public rcoEstatus?: string
    ){}
}