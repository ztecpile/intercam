import { ContratoCorresponsalVO } from "./ContratoCorresponsalVO";
import { ContratoVO } from "./ContratoVO";

    export class ContratoSICAVO extends ContratoVO
    {

        public  csiNoOpMes:number;
        public  csiMontoOpMes:number;
        public  csiRecurrente:boolean;
        public  csiRepretel:string;
        public  csiFacElec:string;
		public  csiCorresponsal:string;
        /**
        * Indica si es usuario o cliente
        */
        public  csiUsuario:string;
        /**
         * Clave de la ventanilla
         */
        public  csiCveVenta:string;
        /**
         * Clave del caja
         */
        public  csiCjvCaja:string;
        /**
         * Clave del promotor
         */
        public  csiClvPro:string;
        /**
         * Bandera para determinar si se envia de forma automática o no el comprobante de la FED.
         */
        public  csiFedAuto:boolean;

		/**
		 * indica el estatus de la solicitud para operar reuters.
		 */
		public  csiSolOperaet:string;

        /**
         * indica si el contrato opera REUTERS
         */
        public  csiOperaEt:boolean;

		public  csiCausabajaET:number;
		
		public  contratoCorresponsalVO:ContratoCorresponsalVO;
		
		public  csiOperaiCambios : string;
		
		
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
