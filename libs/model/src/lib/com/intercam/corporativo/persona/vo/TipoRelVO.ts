
	export class TipoRelVO
	{
		public  treClave : number;
		public  treDescripcion : string;
		public  tpeClave : string;
		public  tipoRelRiesgo:number;
        public  tconId : number;
        
        
		/**
	    * Constructor de la clase.
	    */
	    public  TipoRelVO()
	    {
	    	this.treDescripcion = '';
	    }
		
		public  toString():string{
			return "treDescripcion: " + this.treDescripcion;
		}
	}
