export class MT940EnviosVO {
    constructor(
        public mteId?: number,
        public conId?: number,
        public mteCuenta?: string,
        public mteSwift?: string,
        public mteStatus?: string,
        public mtePerNomCorto?: string,
        public mteDivisa?: string,
    ) {}
}