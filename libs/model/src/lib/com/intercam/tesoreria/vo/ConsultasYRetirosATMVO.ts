
export class ConsultasYRetirosATMVO{

    constructor(
        public numeroCuenta?: string,
        public cuentaDestino?: string,
        public fecha?: Date,
        public hora?: string,
        public cajero?: string,
        public secuencia?: string,
        public autorizacion?: string,
        public codigoRespuesta?: string,
        public bancoEmisor?: string,
        public descripcionBanco?: string,
        public bancoId?: number,
        public descripcionTransaccion?: string,
        public monto?: number,
        public comision?: number,
        public total?: number
    ){}
}