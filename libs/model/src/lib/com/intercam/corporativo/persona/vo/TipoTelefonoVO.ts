
	export class TipoTelefonoVO
	{
		public  id : number;
    	public  descripcion : string;
    	public  tmpCveSabi : string;
    	//Descripci&oacute;n en ingles del tipo de Tel&eacute;fono
    	public  tteDescIng : string; //tte_desc_ing
    	/**
	    * Constructor de la clase.
	    */
	    public  TipoTelefonoVO()
	    {
	    	this.descripcion = '';	
	    	this.tteDescIng = '';
	    }
	}
