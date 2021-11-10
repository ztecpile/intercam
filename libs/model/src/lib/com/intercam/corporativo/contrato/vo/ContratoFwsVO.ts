
    export class ContratoFwsVO
    {
        public  constructor()
        {
			this.cfwMontoMinTransferencia = 0;
        }
        
        /**
         * id Contrato
         */
        public  conId : number;
        
        /**
         * con_id cuenta enlace
         */
        public  cfwConIdEnl : number;
        
        /**
         * con_id cuenta divisas banco
         */
        public  cfwConIdDB : number;
        
        /**
         * cuenta banco enlace
         */
        public  cfwCueEnlace : string;
        
        /**
         * cuenta divisas banco
         */
        public  cfwCueDB : string;
        
        /**
         * Si maneja sobregiro
         */
        public  cfwSobreGiro : boolean;
        
        /**
         * limite operativo
         */
        public  cfwLimtOpe : number;
        
        /**
         * porcentaje garantia
         */
        public  cfwGtia  : number;
        
        /**
         * fecha inicio
         */
        public  cfwFini : Date;
        
        /**
         * fecha fin
         */
        public  cfwFfin : Date;
        
        /**
         * monto perdida
         */
        public  cfwMtoPer : number;
        
        /**
         * monto de sobregiro
         */
        public  cfwMtoSobreGro:number;
        
        /**
         * observaciones
         */
        public  cfwObs : string;
        
        /**
         * Opera sin garantia
         */
        public  cfwOpeSinGrarantia : boolean;
        
        /**
         * Factor de margen
         */
        public  cfwFacMargen : number;
        
        /**
         * Plazo
         */
        public  cfwPlazo : number;
        
        /**
         * Fecha de autorizacion de control - riesgo
         */
        public  cfwFAutoriza : Date;
        
        /**
         * id Contraparte
         */
        public  cfwIdContraparte : string;
        
        /**
         * Nombre Contraparte
         */
        public  cfwNomContraparte : string;
        
        /**
         * Numero Linea /(solo contrapartes)
         */
        public  cfwNumLinea : string;
		/**
		 * Monto minimo de transferencias
		 */
		public  cfwMontoMinTransferencia : number;
        
        /**
         * Fecha de vigencia de la línea de operacion
         */
        public  cfwFVigLineaOper: Date;
        
        /**
         * Fecha de inicio de la línea de operacion
         */
        public  cfwFIniLineaOper: Date;
        
        /**
        * marca si liquida Non Delivery Forwards 
        * */
        public  cfwNdf: boolean;
    }
