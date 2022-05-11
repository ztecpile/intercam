
	export class TipoDireccionVO
	{
		public  tdiId : number;
		public  tdiDescripcion : string;
		public  tmpOldsiif : number;
		public  tmpEnvioEdo : number;
		public  tmpDoctoEnvio : number;
		public  tmpOldSabi : string;
		public  tdiDescIng : string; //tdi_desc_ing
		 
		/**
	    * Constructor de la clase.
	    */
	    public  TipoDireccionVO()
	    {
	    	this.tdiDescripcion = '';
	    	this.tmpOldsiif = 0;
	    	this.tmpEnvioEdo = 0;
	    	this.tmpDoctoEnvio = 0;
	    	this.tmpOldSabi = '';
	    	this.tdiDescIng = '';
	    }
	}
