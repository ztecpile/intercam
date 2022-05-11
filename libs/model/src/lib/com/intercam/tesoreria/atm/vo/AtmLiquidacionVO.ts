export class AtmLiquidacionVO{

    constructor(
        public adquirienteEmisor ?: string,
        public concepto ?: string,
        public dSubtotal ?: number,
        public eIva ?: number,
        public fDebito ?: number,
        public gCredito ?: number,
        public total ?: number
    ){}
}