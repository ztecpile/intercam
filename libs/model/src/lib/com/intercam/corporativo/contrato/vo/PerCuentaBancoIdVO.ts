import { CuentaBancoVO } from "./CuentaBancoVO";

	export class PerCuentaBancoIdVO
	{
	    
	     public  perId : number;
	     public  cueIdVO : CuentaBancoVO;
	    
		/**
	    * Constructor de la clase.
	    */
		public constructor()
	    {

	    }
	    
		  public  toString() : string
			    {
			    	return this.perId.toString() + ',' + this.cueIdVO.toString();
			    }
	    
	    
	}
