import { ContratoVO } from "./ContratoVO";
import { ConSpidVO } from "./ConSpidVO";
import { ContratoFwsVO } from "./ContratoFwsVO";

    export class ContratoBancoVO extends ContratoVO
    {
        /**
         * ID de la moneda
         **/
        public  divId : string;
        /**
         * Tipo de cuenta
         **/
        public  ccbnTipoCuenta : string;
        /**
         * Instrucciones de envio
         **/
        public  ccbnInsEnvio : string;
        /**
         * Tasa ISR
         **/
        public  ccbnIsr : number;
        /**
         * Generar Cheques
         **/
        public  ccbnGenChe : string;
        /**
         * Tipo del talonario
         **/
        public  ccbnTipoTal : string;

        public  ccbnChePro : string;

        public  ccbnMontoPro : number;

        public  ccbnAutRev : string;

        public  ccbnTalonarioSuc : number;

        /**
         * Entrego escritura (S o N)
         */
        public  entregoEscritura : string;

        public  ccbnCobraIsr : string;

        public  ccbnCobraIde : string;

        public  ccbnCobraIva : string;

        /**
         * Indica si el contrato es para una entidad financiera otorgante de credito o no.
         */
        public  ccbnEsEntidadOtorgante : boolean;
		
		/**
		 * Numero de telefono para Spei Movil 
		 */
		public  telefonoSpei : string;
		
		/**
		 * perId del promotor que atiende el contrato en sibamex
		 */
		public  perIdPromAtiende:string;

		/**
		 * legada del promotor que atiende el contrato en sibamex
		 */
		public  legadaPromAtiende:string;
		 
        
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
		public  ccbnOperaTel : boolean;
        
        /**
        * Almacena las instrucciones globales de la combinacion de firmas
        */ 
        public  ccbnInstruccionGlobal : string;

		/**
		 * Opera Spid
		 */		
		public  ccbnOperaSpid : boolean;
		
		/**
		 * Proposito de la cuenta en Dolares
		 */	
		public  ccbnCuentaDolares : string;
        
        /**
         * Opera derivados
         */
        public  ccbnOperaDerivados : boolean;
        
        /**
         * estatus Stardoc
         */
        public  ccbnStatusStardoc : string;
        
        /**
         * Parte Derivados
         */
        public  ccbnParte : string;
		
        public  ccbnOperaFondos :boolean;
        
        /**
        * Indica si opera mercado de dinero
        */
        public  ccbnOperaMD: boolean;
		
        /********************************************************
         * Constructor
         * *******************************************************/
		public constructor()
		{
			super();
			//conPerfilInversion = Const.NO_OPERA_MD;
			this.ccbnCobraIva = "F";
			this.ccbnOperaDerivados = false;
		}
    }
