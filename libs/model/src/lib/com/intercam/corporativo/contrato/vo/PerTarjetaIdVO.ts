import { TarjetaVO } from "./TarjetaVO";

	export class PerTarjetaIdVO
	{   
	    public  tarIdVO : TarjetaVO;
	    public  perId : number;
	    
	    /**
	    * Constructor de la clase.
	    */
		public constructor()
		{
			this.tarIdVO = new TarjetaVO;
		}
		
		public  toString() : string{
		    return this.perId.toString() + ',' + this.tarIdVO.toString();
	    }
	     
	}
