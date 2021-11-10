import { TipoContratoVO } from "../../contrato/vo/TipoContratoVO";

	export class TipoEnvioEdoVO
	{
	    public  tenId : Number;
	    public  tenDescripcion : String;
	    public  tipoContratoVO : TipoContratoVO;
	    public  tenFrecuencia : Number;
	    public  idDoctoEnvio : Boolean;
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
