
	export class PepSociedadVO
	{
		public  psoId : number;
		public  psoRazonSocial : string;
		public  psoRfc : string;
		public  psoGiro : string;
		public  psoNombre : string;
		public  psoNacionalidad : boolean;
		public  psoPais : string;
		public  pepId : string;
    	public  perId : number;
    	public  psoConsecLegado : number;
    	
		/**
	    * Constructor de la clase.
	    */
	    public  PepSociedadVO()
	    {
	    	this.psoRazonSocial = '';
	    	this.psoRfc = '';
	    	this.psoGiro = '';
	    	this.psoNombre = '';
	    	this.psoNacionalidad = false;
	    	this.psoPais = '';
	    	this.pepId = '';
	    	this.psoConsecLegado = 0;
	    }
	}
