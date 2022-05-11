
	export class TipoActaIdVO
	{
		public  tacId : number;
     	public  treClave : number;
	    
		/**
	    * Constructor de la clase.
	    */
	    public  TipoActaIdVO()
	    {
	    	
	    }
	    
	    public  toString() : string {
			return this.tacId.toString()+','+this.treClave.toString();
	    }
	}
