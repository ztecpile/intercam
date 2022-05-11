import { TipoContratoVO } from "../../contrato/vo/TipoContratoVO";

	export class TipoEnvioEdoVO
	{
	    public  tenId : number;
	    public  tenDescripcion : string;
	    public  tipoContratoVO : TipoContratoVO;
	    public  tenFrecuencia : number;
	    public  idDoctoEnvio : boolean;
		/**
	    * Constructor de la clase.
	    */
	    public  constructor()
	    {
	    	this.tenDescripcion = '';
	    	this.tipoContratoVO = new TipoContratoVO();
	    	this.tenFrecuencia = 0;
	    }
	}
