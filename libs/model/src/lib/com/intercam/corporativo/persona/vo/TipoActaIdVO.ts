
	export class TipoActaIdVO
	{
		public  tacId : Number;
     	public  treClave : Number;
	    
		/**
	    * Constructor de la clase.
	    */
	    public  TipoActaIdVO()
	    {
	    	
	    }
	    
	    public  toString() : String {
			return this.tacId.toString()+','+this.treClave.toString();
	    }
	}
