export class PersonasListasVO{
	constructor(
		public plnId? : number,
		public aleId? : number,
		public plnRazonSocial? : string,
		public plnCoincidencia? : number,
		public plnFechaIngresoLista? : Date,
		public plnListaEncontrada? : string,
		public perfil? : string,
		public nombreCliente? : string,
		public perId? : number,
		public rfc? : string,
		public fechaNac? : string,
		public plnClvLista? : string
    ){}
}