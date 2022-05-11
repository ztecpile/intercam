import { ContratoVO } from "./ContratoVO";

	export class ContratoPersonaIdVO
	{
		public  contratoVO : ContratoVO;
	    public  perId : number;
	    public  cpeConsecLegado : number;
	    /**
	    * Constructor de la clase.
	    */
		public constructor()
	    {
	    	this.contratoVO = new ContratoVO();
	    	this.cpeConsecLegado = 0;
	    }

	}
