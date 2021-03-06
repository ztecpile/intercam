import { ConPersonaPerfilIdVO } from "./ConPersonaPerfilIdVO";

	export class ConPersonaPerfilVO
	{
		public  idVO : ConPersonaPerfilIdVO;
	    public  cppEstatus : boolean;
	    public  cppFalta : Date;
        public  cppFmodifica : Date;
        /**
         * Alamcena el rfc / Fm3 / Ssn, dependiendo de lo que se haya capturado.
         */ 
        public  rfcFm3Ssn : string;
        
	    /**
	    * Constructor de la clase.
	    */
		public constructor() {
	    	this.idVO = new ConPersonaPerfilIdVO();
	    }
	}
