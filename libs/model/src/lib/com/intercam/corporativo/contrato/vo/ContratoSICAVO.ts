import { ContratoCorresponsalVO } from "./ContratoCorresponsalVO";
import { ContratoVO } from "./ContratoVO";

    export class ContratoSICAVO extends ContratoVO
    {

        public  csiNoOpMes:Number;
        public  csiMontoOpMes:Number;
        public  csiRecurrente:Boolean;
        public  csiRepretel:String;
        public  csiFacElec:String;
		public  csiCorresponsal:String;
        /**
        * Indica si es usuario o cliente
        */
        public  csiUsuario:String;
        /**
         * Clave de la ventanilla
         */
        public  csiCveVenta:String;
        /**
         * Clave del caja
         */
        public  csiCjvCaja:String;
        /**
         * Clave del promotor
         */
        public  csiClvPro:String;
        /**
         * Bandera para determinar si se envia de forma automática o no el comprobante de la FED.
         */
        public  csiFedAuto:Boolean;

		/**
		 * indica el estatus de la solicitud para operar reuters.
		 */
		public  csiSolOperaet:String;

        /**
         * indica si el contrato opera REUTERS
         */
        public  csiOperaEt:Boolean;

		public  csiCausabajaET:Number;
		
		public  contratoCorresponsalVO:ContratoCorresponsalVO;
		
		public  csiOperaiCambios : String;
		
		
        /**
         * Constructor de la clase.
         */
        public constructor()
        {
           super();
            this.csiNoOpMes = 0;
            this.csiMontoOpMes = 0;
            this.csiUsuario = "V";
			this.csiFedAuto = true;
			this.csiFacElec = 'N';
			this.contratoCorresponsalVO = new ContratoCorresponsalVO();
        }
    }
