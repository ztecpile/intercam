import { CuentaContratoIdVO } from "./CuentaContratoIdVO";

	export class CuentaContratoVO 
	{
		public  idVO:CuentaContratoIdVO;
	    public  usuUsario:string;
	    public  cueFaltaStr :string;
    	public  perNomCorto:string;
	    public  banNombre:string;
		public  cueEstatus:string;
		public  cueConsecLegado:number;
        public  cueCuentaBan : string;
        public  cueEsDefault : boolean;
	    public  cueSucursal:string;
	    public  cueTipoLiquida:number;
	    public  cueMontoMax : number
	    public  cueFvigenciaStr : string;
	    public  cuePlaza:string;
	    public  tmpCveRepet : number;
	    public  cueLiqDerivados : boolean;
        public  cueDescripcion : string;
        public  motivoPagoBancaVO : any ; //MotivoPagoBancaVO;
        public  tipoRelacionBancaVO : any ;//TipoRelacionBancaVO;

	    /**
	     * Clabe de cuenta-banco
	     */
	    public  cueClabe:string;

	    /**
	     * Convenio de cuenta-banco
	     */
	    public  cueConvenio:string;

	    /**
	     * Referencia No. 1 de cuenta-banco
	     */
	    public  cueReferencia1:string;

	    /**
	     * Identificadoer de la divisa
	     */
	    public  divId:string;
        
        /**
        * Almacena si la repetitiva esta en el portal de Reuter 
        */
        public  cueHabiliitaPortal : string;
        /**
        * Bandera que determina si se habilita, deshabilita o se actualiza la repetitiva en el portal
        */
        public  isHabilitado : boolean;
        /**
        * Bandera que inidica si es la primera que vez que se manda a ET 
        */ 
        public  isFirstEt : boolean;
        /**
        * Bandera que inidica si el elemnto ha sido seleccionado
        * */
        public  isSelected : boolean;
        /**
        * Bandera que inidica si todos los elementos han sido seleccionados
        * */
        public  isHeader : boolean;
        
		/** 
		 Especifica si un elemento debe de estar seleccionado.
		 */
		public  conSelected : boolean = false; 

		/**
	    * Constructor de la clase.
	    */
		public constructor()
	    {
	    	this.idVO = new CuentaContratoIdVO();
	    	this.cueEsDefault = false;
			this.cueEstatus = "SU";
			this.cueMontoMax = 0;
	    }
	}
