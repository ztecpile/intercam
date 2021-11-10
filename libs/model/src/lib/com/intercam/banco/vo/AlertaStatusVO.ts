export class AlertaStatusVO{
    constructor(
        public alsId?: number,
        public araId?: number,
        public stsClave?: string,
        public stsClaveStatus?: string,
        public alsFecha?: Date,
        public usuUsuario?: string,
        public aleId?: number,
        public aleFirma?: string
    ){}
}