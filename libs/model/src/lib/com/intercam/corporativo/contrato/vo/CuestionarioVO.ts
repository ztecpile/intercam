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
		public 	rpcFecharegStr : string;
		public 	rpcFechacapturaStr : string;
		public  respuestasContratoVO : RespuestasContratoVO[];
		
		/**
	     * Tipo de persona asociada al cuestionario
	     */
	    public  tpeClave : string;

	    /**
	     * Tipo de contrato asociado al cuestionario
	     */
	    public  tconId :number;

	    /**
	     * Perfil del la persona asociada al cuetionario
	     */
	    public  perfId : number;


     	/**
	    * Constructor de la clase.
	    */
	    public constructor(){
	    	//this.respuestasContratoVO = new ArrayCollection();
	    	//this.rpcFechacapturaStr = '';
	    	//this.rpcFecharegStr='';
		}
	}
