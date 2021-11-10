import { ConSpidVO } from "./ConSpidVO";
import { ContratoFwsVO } from "./ContratoFwsVO";

    export class ContratoBancoVO 
    {
        /**
         * ID de la moneda
         **/
        public  divId : String;
        /**
         * Tipo de cuenta
         **/
        public  ccbnTipoCuenta : String;
        /**
         * Instrucciones de envio
         **/
        public  ccbnInsEnvio : String;
        /**
         * Tasa ISR
         **/
        public  ccbnIsr : Number;
        /**
         * Generar Cheques
         **/
        public  ccbnGenChe : String;
        /**
         * Tipo del talonario
         **/
        public  ccbnTipoTal : String;

        public  ccbnChePro : String;

        public  ccbnMontoPro : Number;

        public  ccbnAutRev : String;

        public  ccbnTalonarioSuc : Number;

        /**
         * Entrego escritura (S o N)
         */
        public  entregoEscritura : String;

        public  ccbnCobraIsr : String;

        public  ccbnCobraIde : String;

        public  ccbnCobraIva : String;

        /**
         * Indica si el contrato es para una entidad financiera otorgante de credito o no.
         */
        public  ccbnEsEntidadOtorgante : Boolean;
		
		/**
		 * Numero de telefono para Spei Movil 
		 */
		public  telefonoSpei : String;
		
		/**
		 * perId del promotor que atiende el contrato en sibamex
		 */
		public  perIdPromAtiende:String;

		/**
		 * legada del promotor que atiende el contrato en sibamex
		 */
		public  legadaPromAtiende:String;
		 
        
        /**
         * SPID
         */
        public  conSpidVO : ConSpidVO ;
        
        /**
        * FWS
        **/
        public  contratoFwsVO : ContratoFwsVO;
		
		/**
		 * Opera tel 
		 **/
		public  ccbnOperaTel : Boolean;
        
        /**
        * Almacena las instrucciones globales de la combinacion de firmas
        */ 
        public  ccbnInstruccionGlobal : String;

		/**
		 * Opera Spid
		 */		
		public  ccbnOperaSpid : Boolean;
		
		/**
		 * Proposito de la cuenta en Dolares
		 */	
		public  ccbnCuentaDolares : String;
        
        /**
         * Opera derivados
         */
        public  ccbnOperaDerivados : Boolean;
        
        /**
         * estatus Stardoc
         */
        public  ccbnStatusStardoc : String;
        
        /**
         * Parte Derivados
         */
        public  ccbnParte : String;
		
        public  ccbnOperaFondos :Boolean;
        
        /**
        * Indica si opera mercado de dinero
        */
        public  ccbnOperaMD: Boolean;
		
        /********************************************************
         * Constructor
         * *******************************************************/
		public constructor()
		{
			
			//conPerfilInversion = Const.NO_OPERA_MD;
			this.ccbnCobraIva = "F";
			this.ccbnOperaDerivados = false;
		}
    }
