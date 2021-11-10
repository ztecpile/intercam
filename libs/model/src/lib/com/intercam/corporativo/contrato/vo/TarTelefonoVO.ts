import { TarTelefonoIdVO } from "./TarTelefonoIdVO";

	export class TarTelefonoVO
	{   
	    public  idVO : TarTelefonoIdVO;
        public  tatFaltaStr : String;
	    
	    
	    /**
	    * Constructor de la clase.
	    */
		public constructor()
		{
			this.idVO = new TarTelefonoIdVO;
		}
		
		public  toString() : String{
		    return this.idVO.toString();
	    }
	     
	}
