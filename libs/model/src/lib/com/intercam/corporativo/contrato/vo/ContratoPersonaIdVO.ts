import { ContratoVO } from "./ContratoVO";

	export class ContratoPersonaIdVO
	{
		public  contratoVO : ContratoVO;
	    public  perId : Number;
	    public  cpeConsecLegado : Number;
	    /**
	    * Constructor de la clase.
	    */
		public constructor()
	    {
	    	this.contratoVO = new ContratoVO();
	    	this.cpeConsecLegado = 0;
	    }
	    /**
	     * Obtiene la representación String del objeto.
	     */  
	    public  toString() : String
	    {
	    	return this.perId + ',' + this.contratoVO.toString()+','+this.cpeConsecLegado;
	    }
	}
