import { ContratoPersonaVO } from "../../contrato/vo/ContratoPersonaVO";
import { DireccionVO } from "./DireccionVO";
import { TipoEnvioEdoVO } from "./TipoEnvioEdoVO";

	export class DoctoEnvioVO
	{
		public  denId : number;
		public  contratoPersonaVO : ContratoPersonaVO;
	   	public  tipoEnvioEdoVO : TipoEnvioEdoVO;
	    public  direccionVO : DireccionVO;
		/**
	    * Constructor de la clase.
	    */
	    public  DoctoEnvioVO()
	    {
	    	this.contratoPersonaVO = new ContratoPersonaVO();
	    	this.tipoEnvioEdoVO = new TipoEnvioEdoVO();
	    	this.direccionVO = new DireccionVO();
	    }
	}
