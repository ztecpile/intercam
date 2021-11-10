
	export class CalifClienteIdVO
	{     	

	     public  clvCli : String;
	     public  clvSuc : String;
	     public  carRazonSocial: String;
	    
		/**
	    * Constructor de la clase.
	    */
	    public constructor()
	    {
	    	
	    }
	    
	    public  toString() : String {
			return this.clvCli.toString()+','+this.clvSuc.toString()+','+this.carRazonSocial;
	    }
	}
