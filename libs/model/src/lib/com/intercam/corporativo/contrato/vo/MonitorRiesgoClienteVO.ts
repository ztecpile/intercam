                                              
    export class MonitorRiesgoClienteVO
    {
    
        /**
         * Id Usuario
         */
        public  idPromotor: Number; 
        /**
         * nombre de usuario
         */
        public  nombrePromotor: String;
        /**
         * id Clente
         */
        public  idCliente: Number;
        
        /**
         * nombre cliente
         */
        public  nombreCliente: String;
        
        /**
         * contrato con el que se calculo el riesgo
         */
        public  conId: Number;
        
        /**
         * legada de contrato
         */
        public  tmpCveLegada: String;
        
        /**
         * Novel de riesgo actual
         */
        public  vrIdActual: Number;
        
        /**
         * nivel de riesgo anterior:
         * este nivel no toma el riesgo calculado cuando se calcula de forma directa
         */
        public  vrIdAnterior: Number;
        
        /**
         * folio del cuestionario cuando ya se capturo el cuestionario
         */
        public  cuesFolio: Number;
        
        /**
         * Numero de clientes bajo riesgo
         */
        public  noClientes1: Number;
        /**
         * Numero de clientes medio riesgo
         */
        public  noClientes2: Number;
        /**
         * Numero de clientes alto riesgo
         */
        public  noClientes3: Number;
        
        /**
        * Clave de sucursal
        **/
        public  sucClave: Number;
        
        /**
         * Sucursal del Promotor
         */
        public  sucDescripcion: String;
        
        /**
         * Cuestionario faltante riesgo medio
         */
        public  cuesFaltante2: Number;
        
        /**
         * Cuestionario faltante riesgo alto
         */
        public  cuesFaltante3: Number;
        
        // public  get cuesfaltantesMedio(): Number {
        //     return this.noClientes2- this.cuesFaltante2;
        // }
        
        // public  get cuesfaltantesAlto(): Number {
        //     return this.noClientes3- this.cuesFaltante3;
        // }
    
    }
