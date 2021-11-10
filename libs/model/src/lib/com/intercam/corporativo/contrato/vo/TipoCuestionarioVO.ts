import { TipoPersonaVO } from "../../persona/vo/TipoPersonaVO";
import { PerfilVO } from "./PerfilVO";
import { TipoContratoVO } from "./TipoContratoVO";
import { TipoSeccionVO } from "./TipoSeccionVO";

	export class TipoCuestionarioVO
	{
		public  tcuId : Number;
		public  tcuDescripcion:String;
		public  tipoContratoVO :TipoContratoVO;	
		public  tipoPersonaVO :TipoPersonaVO;		
		public  tipoSeccionesVO :Set <TipoSeccionVO>;
		public  rpcFecharegStr : String;
		public  rpcFechacapturaStr :String;
		public  perfilVO : PerfilVO;
		
		
     	/**
	    * Constructor de la clase.
	    */
	    public constructor()
	    {
	    	this.tipoContratoVO = new TipoContratoVO();
	    	this.tipoPersonaVO = new TipoPersonaVO();
	    	//this.tipoSeccionesVO = new ArrayCollection();
	    	this.perfilVO = new PerfilVO;
	    }
	}
