
	export class PersonaLegadoVO
	{
		public  clvCli : string;
		public  tconDescripcion : string;
		public  perNombre : string;
		public  estatusCon : string;
		public  nomCliente : string;
		public  fecAltaClienteStr : string;
		public  rfc : string;
		public  promotorMigrado : string ;
		public  cveSuc : string;
		
		public  PersonaLegadoVO()
		{
			
		}
		
		public  toString():string{
			return this.nomCliente+', '+this.fecAltaClienteStr;
		}
	}
