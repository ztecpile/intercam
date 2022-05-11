
    export class HomologacionVO
    {
        
        /**
         * No de contrato a Homologar
         */
        public  conId : number;
        
        /**
         * Id de cliente incorrecto a Homologar
         */
        public  perIdAnt : number;
        
        /**
         * Nombre corto del cliente  incorrecto a Homologar
         */
        public  perNombreCortoAnt : string;
        
        /**
         * Id cliente correcto a Homologar
         */
        public  perId : number;
        
        /**
         * Nombre corto del cliente a Homologar
         */
        public  perNombreCorto : string;
		/**
		 * Comentarios de la homologacion
		 */
		public  comentarios : string;
        /**
        * Usuario solicitante
        */
        public  solicitante : string;
        /**
         * Coordinador de Sucursal
         */
        public  coordinador : string;
        /**
         * Homologacion de datos de persona
         */
        public  actualizanDatos : boolean;
        /**
         * Onservaciones
         */
        public  observacion : string;
        /**
        * Personas a confirmar por correo
        */
       //List<string> emailPersonas
        public  emailPersonas: string[];
        /**
         * Personas a confirmar por correo
         */
        //List<Integer>
        public  perIdPersonas: number[];
        
        public  usuId : number;
        
        public  sucursal : string;
        
        //List<Integer>
        
        public  perIdPersonasRiesgo : number[];
        
        public constructor()
        {
        }
    }
