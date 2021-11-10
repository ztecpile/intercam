import { CalificacionRiesgoVO } from "./CalificacionRiesgoVO";

	export class SubeArchivoEstatusVO
	{
		
		public  total : Number;
		public  inserto : Number;
		public  actualizo : Number;
		public  borro : Number;
		public  conRelacion : Number;
        public  sinRelacion : Number;
		//List<CalificacionRiesgoVO>
		public  listaRelacionar : CalificacionRiesgoVO; 
		//List<CalificacionRiesgoVO>
		public  registrosDuplicados : CalificacionRiesgoVO; 


     	
	    
		/**
	    * Constructor de la clase.
	    */
	    public constructor()
	    {
	    	
	    }
	    
	}
