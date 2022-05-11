
	export class EnrolaCandidatoVO
	{
		public  trfId : number;
		public  sucClave : number;
		public  trfCodigo : string;
		public  perId : number;
		public  rfc: string;
		public  trfIUB : string;
		
		public  perIdEnrolador : number;
		public  trfEstacion : number;
		public  trfIUBEnrolador: string;
		
		public  codigo : string;
		public  sitKoala : string;
		public  sitIne : string;
		public  checaIne : string;
		public  perNombre : string;
		public  perApPaterno : string;
		public  perApMaterno : string;
		public  curp : string;
		public  cic : string;
		public  anioRegistro : number;
		public  anioEmision : number;
		public  numEmision : number;
		public  claveElector : string;
		public  sexo : string;
		public  fNacimiento : string;
		public  paisClave : number;
		public  entClave : number;
		public  perEstatus : string;
		
		public  filtroNombre : string;
		public  filtroRfc : string;
		public  usuUsuario: string;
		
		public  EnrolaCandidatoVO() {
			this.trfId = 0;
			this.sucClave = 0;
			this.trfCodigo = '';
			this.perId = 0;
			this.rfc = '';
			this.trfIUB = '';
			this.anioRegistro = 0;
			this.anioEmision = 0;
			this.numEmision = 0;
			this.trfEstacion = -1;
			this.filtroNombre = null;
			this.filtroRfc = null;
		}
	}
