
	export class ContratoCorresponsalVO
	{
		public  modificado:Boolean = false;
		
		public  conId:Number;
		
		public  ccoCuenta:String;
		
		public  ccoFormaLiquidacion:String;
		
		public  ccoFhaltaStr:String;
		
		public  usuUsuarioAlta:String;
		
		public  ccoFhestatusStr:String;
		
		public  usuUsuarioEstatus:String;
		
		public  ccoTipoNegocio:String;
		
		public  ccoCausaBaja:String;
		
		public  ccoEstatus:String;
		
		public constructor()
		{
			this.conId = 0;
		}
		
		public  toString() : String
		{
			return 	" conId:" + this.conId + 
					"\n ccoCuenta:" + this.ccoCuenta + 
					"\n ccoFormaLiquidacion:" + (this.ccoFormaLiquidacion == null ? "": (this.ccoFormaLiquidacion == "1" ? "Efectivo":"Abono en cuenta")) +
					"\n ccoFhaltaStr:" + this.ccoFhaltaStr + 
					"\n usuUsuarioAlta:" + this.usuUsuarioAlta + 
					"\n ccoFhestatusStr:" + (this.ccoFhestatusStr == null ? "" : this.ccoFhestatusStr)+ 
					"\n usuUsuarioEstatus:" + (this.usuUsuarioEstatus == null ? "" : this.usuUsuarioEstatus)+ 
					"\n ccoTipoNegocio:" + (this.ccoTipoNegocio == null ? "":(this.ccoTipoNegocio == "82" ? "Comercio":(this.ccoTipoNegocio == "83" ? "Dutty Free":"Hotel")))+ 
					"\n ccoCausaBaja:" + (this.ccoCausaBaja == null ? "" : (this.ccoCausaBaja == "1" ? "Cierre de Operaciones del Administrador":(this.ccoCausaBaja == "2" ?"Incumplimiento del contrato de Comision Mercantil":"Vencimiento del contrato de Comision Mercantil")))+ 
					"\n ccoEstatus:" + this.ccoEstatus;
		}
	}
