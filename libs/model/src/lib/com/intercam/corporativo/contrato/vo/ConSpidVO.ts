
    export class ConSpidVO
    {
        /**
         * contrato
         */
        public  conId : Number;
        
        /**
         * Estatus
         * SO -Solicitado
         * AC - Activo
         * RE - Rechazado
         * SU - Suspendido
         */
        public  spiEstatus : String;
        
        /**
         * Estatus Solicitud
         * Ac - SUS
         */
        public  spiEstsol : String;
        
        /**
         * fecha inicio operacion SPID
         */
        public  spiFinicio : Date;
        
        /**
         * fecha fin operacion SPID
         */
        public  spiFvig : Date;
        
        /**
         * Fecha de vigencia Certificado 
         */
        public  spiFvigcer : Date;
        
        /**
         * Observaciones
         */
        public  spiObservacion : String;
        
        /**
         * Autoriza
         */
        public  spiAutoriza : String;
        
        /**
         * Solicita
         */
        public  spiSolicita : String;
        
        /**
         * Fecha actualizacion
         */
        public  spiFhsta : Date;
        
        /**
         * Fecha ultima consulta
         */
        public  spiFConsulta: Date;

        /**
         * Alto riesgo
         */
        public  spiAltoRiesgo:String =  "0";
        
        /**
        * iable unica de flex que indica si se valido el SPID
        **/
        public  spidValido:Boolean;
        
        public constructor()
        {   
            this.spiAltoRiesgo = "0";
        }
    }
