
    export class TipoContratoVO {
        /**
         * Identificador &uacutenico del tipo de contrato
         */
        public  tconId : number;
        /**
         * Descripci&oacuten del tipo de contrato
         */
        public  tconDescripcion : string;
        /**
         * Determina si el tipo de contrato esta disponible desde el internet
         */
        public  tconDispInternet : string;
        /**
         * tconTipoPersona.
         */
        public  tconTipoPersona : string;
        /**
         * Identificador &uacutenico de la persona asociada con este tipo de contrato
         */
        public  perId : number;
        /**
         * Estatus del contrato.
         */
        public  tconEstatus : boolean;
        /**
         * Imagen asociada al tipo de contrato.
         */
        public  tconImagen : string;
        /**
         * Nombre de la empresa que debe aparecer en los formatos asociados a ese contrato.
         */
        public  tconDscFormatos : string;
		
		/**
		 * Tipo de persona al que aplica el negicio
		 * */
		public  tpeClave : string;
        
        /**
         * Descripcion del contrato, incluyendo la descripcion completa para Divisas Casa de Bolsa
         *  
         **/
        // public  get descTipoContrato(): string {
        //     return this.tconId == Const.INT_1 ? 
        //         this.tconDescripcion + " " + ResourceManager.getInstance().getstring(Const.RESOURCE, 'descDivisas1') :
        //         this.tconDescripcion;
        // }

    }

