
	export class PepSociedadVO
	{
		public  psoId : Number;
		public  psoRazonSocial : String;
		public  psoRfc : String;
		public  psoGiro : String;
		public  psoNombre : String;
		public  psoNacionalidad : Boolean;
		public  psoPais : String;
		public  pepId : String;
    	public  perId : Number;
    	public  psoConsecLegado : Number;
    	
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
