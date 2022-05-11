                                              
    export class MonitorRiesgoClienteVO
    {
    
        /**
         * Id Usuario
         */
        public  idPromotor: number; 
        /**
         * nombre de usuario
         */
        public  nombrePromotor: string;
        /**
         * id Clente
         */
        public  idCliente: number;
        
        /**
         * nombre cliente
         */
        public  nombreCliente: string;
        
        /**
         * contrato con el que se calculo el riesgo
         */
        public  conId: number;
        
        /**
         * legada de contrato
         */
        public  tmpCveLegada: string;
        
        /**
         * Novel de riesgo actual
         */
        public  vrIdActual: number;
        
        /**
         * nivel de riesgo anterior:
         * este nivel no toma el riesgo calculado cuando se calcula de forma directa
         */
        public  vrIdAnterior: number;
        
        /**
         * folio del cuestionario cuando ya se capturo el cuestionario
         */
        public  cuesFolio: number;
        
        /**
         * Numero de clientes bajo riesgo
         */
        public  noClientes1: number;
        /**
         * Numero de clientes medio riesgo
         */
        public  noClientes2: number;
        /**
         * Numero de clientes alto riesgo
         */
        public  noClientes3: number;
        
        /**
        * Clave de sucursal
        **/
        public  sucClave: number;
        
        /**
         * Sucursal del Promotor
         */
        public  sucDescripcion: string;
        
        /**
         * Cuestionario faltante riesgo medio
         */
        public  cuesFaltante2: number;
        
        /**
         * Cuestionario faltante riesgo alto
         */
        public  cuesFaltante3: number;
        
        // public  get cuesfaltantesMedio(): number {
        //     return this.noClientes2- this.cuesFaltante2;
        // }
        
        // public  get cuesfaltantesAlto(): number {
        //     return this.noClientes3- this.cuesFaltante3;
        // }
    
    }
