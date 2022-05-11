
    export class ConSpidVO
    {
        /**
         * contrato
         */
        public  conId : number;
        
        /**
         * Estatus
         * SO -Solicitado
         * AC - Activo
         * RE - Rechazado
         * SU - Suspendido
         */
        public  spiEstatus : string;
        
        /**
         * Estatus Solicitud
         * Ac - SUS
         */
        public  spiEstsol : string;
        
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
        public  spiObservacion : string;
        
        /**
         * Autoriza
         */
        public  spiAutoriza : string;
        
        /**
         * Solicita
         */
        public  spiSolicita : string;
        
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
        public  spiAltoRiesgo:string =  "0";
        
        /**
        * iable unica de flex que indica si se valido el SPID
        **/
        public  spidValido:boolean;
        
        public constructor()
        {   
            this.spiAltoRiesgo = "0";
        }
    }
