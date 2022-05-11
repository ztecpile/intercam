import { TipoPersonaVO } from "../../persona/vo/TipoPersonaVO";
import { PerfilVO } from "./PerfilVO";
import { TipoContratoVO } from "./TipoContratoVO";
import { TipoSeccionVO } from "./TipoSeccionVO";

	export class TipoCuestionarioVO
	{
		public  tcuId : number;
		public  tcuDescripcion:string;
		public  tipoContratoVO :TipoContratoVO;	
		public  tipoPersonaVO :TipoPersonaVO;		
		public  tipoSeccionesVO : TipoSeccionVO[];
		public  rpcFecharegStr : string;
		public  rpcFechacapturaStr :string;
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
