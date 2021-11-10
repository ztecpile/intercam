
	export class TipoRelVO
	{
		public  treClave : Number;
		public  treDescripcion : String;
		public  tpeClave : String;
		public  tipoRelRiesgo:Number;
        public  tconId : Number;
        
        
		/**
	    * Constructor de la clase.
	    */
	    public  TipoRelVO()
	    {
	    	this.treDescripcion = '';
	    }
		
		public  toString():String{
			return "treDescripcion: " + this.treDescripcion;
		}
	}
