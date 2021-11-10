import { CuentaContratoIdVO } from "./CuentaContratoIdVO";

	export class CuentaContratoVO 
	{
		public  idVO:CuentaContratoIdVO;
	    public  usuUsario:String;
	    public  cueFaltaStr :String;
    	public  perNomCorto:String;
	    public  banNombre:String;
		public  cueEstatus:String;
		public  cueConsecLegado:Number;
        public  cueCuentaBan : String;
        public  cueEsDefault : Boolean;
	    public  cueSucursal:String;
	    public  cueTipoLiquida:Number;
	    public  cueMontoMax : Number
	    public  cueFvigenciaStr : String;
	    public  cuePlaza:String;
	    public  tmpCveRepet : Number;
	    public  cueLiqDerivados : Boolean;
        public  cueDescripcion : String;
        public  motivoPagoBancaVO : any ; //MotivoPagoBancaVO;
        public  tipoRelacionBancaVO : any ;//TipoRelacionBancaVO;

	    /**
	     * Clabe de cuenta-banco
	     */
	    public  cueClabe:String;

	    /**
	     * Convenio de cuenta-banco
	     */
	    public  cueConvenio:String;

	    /**
	     * Referencia No. 1 de cuenta-banco
	     */
	    public  cueReferencia1:String;

	    /**
	     * Identificadoer de la divisa
	     */
	    public  divId:String;
        
        /**
        * Almacena si la repetitiva esta en el portal de Reuter 
        */
        public  cueHabiliitaPortal : String;
        /**
        * Bandera que determina si se habilita, deshabilita o se actualiza la repetitiva en el portal
        */
        public  isHabilitado : Boolean;
        /**
        * Bandera que inidica si es la primera que vez que se manda a ET 
        */ 
        public  isFirstEt : Boolean;
        /**
        * Bandera que inidica si el elemnto ha sido seleccionado
        * */
        public  isSelected : Boolean;
        /**
        * Bandera que inidica si todos los elementos han sido seleccionados
        * */
        public  isHeader : Boolean;
        
		/** 
		 Especifica si un elemento debe de estar seleccionado.
		 */
		public  conSelected : Boolean = false; 

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
