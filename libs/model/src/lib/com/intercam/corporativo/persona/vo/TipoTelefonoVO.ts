
	export class TipoTelefonoVO
	{
		public  id : Number;
    	public  descripcion : String;
    	public  tmpCveSabi : String;
    	//Descripci&oacute;n en ingles del tipo de Tel&eacute;fono
    	public  tteDescIng : String; //tte_desc_ing
    	/**
	    * Constructor de la clase.
	    */
	    public  TipoTelefonoVO()
	    {
	    	this.descripcion = '';	
	    	this.tteDescIng = '';
	    }
	}
