export class TipoTransaccionVO{
    constructor(
        public tipoTransaccion?: string,
        public descripcion?: string,
        public validaPLD?: string,
        public validaUPF?: string,
        public timePayTrue?: string,
        public tipoOperacion?: string,
        public identity?: string,
        public estatus?: string,
        public graId?: number
    ){}
}