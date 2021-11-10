import { PerTarjetaIdVO } from "./PerTarjetaIdVO";

	export class PerTarjetaVO
	{   
	    public  idVO : PerTarjetaIdVO;
	    public  tatFaltaStr : String;
	    
	    /**
	    * Constructor de la clase.
	    */
		public constructor()
		{
			this.idVO = new PerTarjetaIdVO;
		}
		
		public  toString() : String{
		    return this.idVO.toString();
	    }
	     
	}
