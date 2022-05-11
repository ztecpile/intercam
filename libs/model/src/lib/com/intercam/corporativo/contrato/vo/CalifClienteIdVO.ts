
	export class CalifClienteIdVO
	{     	

	     public  clvCli : string;
	     public  clvSuc : string;
	     public  carRazonSocial: string;
	    
		/**
	    * Constructor de la clase.
	    */
	    public constructor()
	    {
	    	
	    }
	    
	    public  toString() : string {
			return this.clvCli.toString()+','+this.clvSuc.toString()+','+this.carRazonSocial;
	    }
	}
