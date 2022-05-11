import { CalificacionRiesgoVO } from "./CalificacionRiesgoVO";

	export class SubeArchivoEstatusVO
	{
		
		public  total : number;
		public  inserto : number;
		public  actualizo : number;
		public  borro : number;
		public  conRelacion : number;
        public  sinRelacion : number;
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
