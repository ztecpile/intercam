import { TarTelefonoIdVO } from "./TarTelefonoIdVO";

	export class TarTelefonoVO
	{   
	    public  idVO : TarTelefonoIdVO;
        public  tatFaltaStr : string;
	    
	    
	    /**
	    * Constructor de la clase.
	    */
		public constructor()
		{
			this.idVO = new TarTelefonoIdVO;
		}
		
		public  toString() : string{
		    return this.idVO.toString();
	    }
	     
	}
