import { ContratoPersonaVO } from "./ContratoPersonaVO";
import { CuentaBancoVO } from "./CuentaBancoVO";

	export class CtaBancoContPerVO
	{
		public  contratoPersonaVO : ContratoPersonaVO;
	    public  cuentaBancoVO : CuentaBancoVO;
	    
	    
	    /**
	    * Constructor de la clase.
	    */
		public constructor()
		{

		    this.contratoPersonaVO = new ContratoPersonaVO();
		    this.cuentaBancoVO = new CuentaBancoVO();
		} 
	}
