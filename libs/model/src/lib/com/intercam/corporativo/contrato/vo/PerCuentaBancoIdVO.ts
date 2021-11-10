import { CuentaBancoVO } from "./CuentaBancoVO";

	export class PerCuentaBancoIdVO
	{
	    
	     public  perId : Number;
	     public  cueIdVO : CuentaBancoVO;
	    
		/**
	    * Constructor de la clase.
	    */
		public constructor()
	    {

	    }
	    
		  public  toString() : String
			    {
			    	return this.perId.toString() + ',' + this.cueIdVO.toString();
			    }
	    
	    
	}
