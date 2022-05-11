import { PerTarjetaIdVO } from "./PerTarjetaIdVO";

	export class PerTarjetaVO
	{   
	    public  idVO : PerTarjetaIdVO;
	    public  tatFaltaStr : string;
	    
	    /**
	    * Constructor de la clase.
	    */
		public constructor()
		{
			this.idVO = new PerTarjetaIdVO;
		}
		
		public  toString() : string{
		    return this.idVO.toString();
	    }
	     
	}
