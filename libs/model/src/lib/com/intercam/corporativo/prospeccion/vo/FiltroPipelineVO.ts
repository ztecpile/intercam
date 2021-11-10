export  class FiltroPipelineVO    {
        /**
         * Representa el id de negocio 
         */
        public idtipoNegocio: number;
        
        /**
         *  Representa la fecha en que se dio de alta en el pipeline un prospecto 
         */ 
        public fechaInPipeline: Date;
        
        /**
         * 
         */ 
        public idEjecutivo: number;
        
        /**
         * El tipo de consulta que se enviare dependiendo del rol del manager 
         **/
        public tipoConsulta: number;
        
        public perId: number;
        
        public perspectivaCliente: boolean;
        
        public usuUsuario: string[];
        
        public sucursal:[];
		
		public areas:[];
		
		public subAreas:[];
        
        /**
        * Almacena la clave de la sucursal
        */ 
        public sucClave : number;
        
        /**
        * Almacena la clave de la sub area
        */ 
        public sarClave : number;
        
        /**
        * Almacena la clave del area
        */ 
        public areClave: number;
        
        /**
        * Almacena el id de la Region 
        */
        public regClave: number;
        
        /**
        * Almacena cualquier valor de tipo Integer
        */ 
        public auxId: number;
		
		/**
		 * Almacena estatus si es o son ejecutivos
		 * solo se usa del lado de flex
		 */
		//public isEjecutivo;
		
		/**
		 * Almacena estatus si se consultan los creditos
		 */
		public isCCredito: boolean;
    }
