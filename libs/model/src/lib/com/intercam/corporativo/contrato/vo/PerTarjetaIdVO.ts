import { TarjetaVO } from "./TarjetaVO";

	export class PerTarjetaIdVO
	{   
	    public  tarIdVO : TarjetaVO;
	    public  perId : Number;
	    
	    /**
	    * Constructor de la clase.
	    */
		public constructor()
		{
			this.tarIdVO = new TarjetaVO;
		}
		
		public  toString() : String{
		    return this.perId.toString() + ',' + this.tarIdVO.toString();
	    }
	     
	}
