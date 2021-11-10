import { RespuestasContratoVO } from "./RespuestasContratoVO";

	export class CuestionarioVO
	{
		public  cuesFolio : number;
		public  tcuId : number;
		public  perId : number;
		public  conId : number;
		public  cpeConsecLegado : number;
		public  rpcFechareg : Date;
		public  rpcFechacaptura : Date;
		public  respuestasContratoVO :Set <RespuestasContratoVO>;

		/**
	     * Tipo de persona asociada al cuestionario
	     */
	    public  tpeClave : String;

	    /**
	     * Tipo de contrato asociado al cuestionario
	     */
	    public  tconId :Number;

	    /**
	     * Perfil del la persona asociada al cuetionario
	     */
	    public  perfId : Number;


     	/**
	    * Constructor de la clase.
	    */
	    public constructor(){
	    	//this.respuestasContratoVO = new ArrayCollection();
	    	//this.rpcFechacapturaStr = '';
	    	//this.rpcFecharegStr='';
		}
	}
