
	export class EnrolaCandidatoVO
	{
		public  trfId : Number;
		public  sucClave : Number;
		public  trfCodigo : String;
		public  perId : Number;
		public  rfc: String;
		public  trfIUB : String;
		
		public  perIdEnrolador : Number;
		public  trfEstacion : Number;
		public  trfIUBEnrolador: String;
		
		public  codigo : String;
		public  sitKoala : String;
		public  sitIne : String;
		public  checaIne : String;
		public  perNombre : String;
		public  perApPaterno : String;
		public  perApMaterno : String;
		public  curp : String;
		public  cic : String;
		public  anioRegistro : Number;
		public  anioEmision : Number;
		public  numEmision : Number;
		public  claveElector : String;
		public  sexo : String;
		public  fNacimiento : String;
		public  paisClave : Number;
		public  entClave : Number;
		public  perEstatus : String;
		
		public  filtroNombre : String;
		public  filtroRfc : String;
		public  usuUsuario: String;
		
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
