
    export class HomologacionVO
    {
        
        /**
         * No de contrato a Homologar
         */
        public  conId : Number;
        
        /**
         * Id de cliente incorrecto a Homologar
         */
        public  perIdAnt : Number;
        
        /**
         * Nombre corto del cliente  incorrecto a Homologar
         */
        public  perNombreCortoAnt : String;
        
        /**
         * Id cliente correcto a Homologar
         */
        public  perId : Number;
        
        /**
         * Nombre corto del cliente a Homologar
         */
        public  perNombreCorto : String;
		/**
		 * Comentarios de la homologacion
		 */
		public  comentarios : String;
        /**
        * Usuario solicitante
        */
        public  solicitante : String;
        /**
         * Coordinador de Sucursal
         */
        public  coordinador : String;
        /**
         * Homologacion de datos de persona
         */
        public  actualizanDatos : Boolean;
        /**
         * Onservaciones
         */
        public  observacion : String;
        /**
        * Personas a confirmar por correo
        */
       //List<String> emailPersonas
        public  emailPersonas: String[];
        /**
         * Personas a confirmar por correo
         */
        //List<Integer>
        public  perIdPersonas: number[];
        
        public  usuId : Number;
        
        public  sucursal : String;
        
        //List<Integer>
        
        public  perIdPersonasRiesgo : number[];
        
        public constructor()
        {
        }
    }
