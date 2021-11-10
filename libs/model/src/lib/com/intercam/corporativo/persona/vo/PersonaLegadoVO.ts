
	export class PersonaLegadoVO
	{
		public  clvCli : String;
		public  tconDescripcion : String;
		public  perNombre : String;
		public  estatusCon : String;
		public  nomCliente : String;
		public  fecAltaClienteStr : String;
		public  rfc : String;
		public  promotorMigrado : String ;
		public  cveSuc : String;
		
		public  PersonaLegadoVO()
		{
			
		}
		
		public  toString():String{
			return this.nomCliente+', '+this.fecAltaClienteStr;
		}
	}
