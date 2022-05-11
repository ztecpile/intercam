export class ServiciosBancoVO{
    constructor(
        public numero?: string,
		public descripcion?: string,
		public status?: string,
		public sePagaBancaElectronica?: string,
		public tipoConsul?: string  
    ){}
}