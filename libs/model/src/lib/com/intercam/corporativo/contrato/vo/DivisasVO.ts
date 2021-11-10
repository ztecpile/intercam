
    export class DivisasVO
    {
        /**
         * Identificador &uacutenico de la divisa en la base de datos
         */
        public  divId : string;
        /**
         * Nombre de la divisa
         */
        public  divNombre : string;
        /**
         * Tipo de la divisa, Billete, Acuñada, etc
         */
        public  divTipo : string;
        /**
         * Si esta iable tiene un valor verdadero, indica que las cantidades de esta
         * divisa se deben dividir antes de realizar su conversion a pesos
         */
        public  divDivide : string;
        /**
         * Iconode que representa la divisa
         */
        public  divIcono : string;
        /**
         * La posicion en la que se debe presentar esta divisa en la lista de divisas
         */
        public  divOrden : number;
        /**
         * iable que almacenara el identificador de las divisas en fondos
         */
        public  divIdFondos : number;
        /**
         * iable para clasificar la divisa, (metales, divisas vs uds)
         */
        public  ctaClasifica : string;
        /**
        * Para seleccion en grid
        */
        public  conSelected : boolean;

		/**
		 * iable para el tipo de divisas para Contrato Banco
		 * */
		public  divIdBanco : string;
		
		/**
		 * Campo que indica si la divisa es solo de lectura
		 * */
		public  soloLectura : string;
		
		public  monitoreaDivisa : boolean;
		
		
        /**
        * Constructor de la clase.
        */
        public constructor()
        {
            this.divId = '';
            this.divNombre = '';
            this.divTipo = '';
            this.divDivide = 'F';
            this.divIcono = '';
            this.divOrden = 0;
            this.divIdFondos = 0;
			this.conSelected = true;
        }
        
        /**
         * Crea una copia independiente del objeto this.
         * 
         * @return un objeto DivisasVO
         */
        // public  clone():DivisasVO{
        //      divisaVO:DivisasVO = new DivisasVO();
            
        //     divisaVO.divId = this.divId;
        //     divisaVO.divNombre = this.divNombre;
        //     divisaVO.divTipo = this.divTipo;
        //     divisaVO.divDivide = this.divDivide;
        //     divisaVO.divIcono = this.divIcono;
        //     divisaVO.divOrden = this.divOrden;
        //     divisaVO.divIdFondos = this.divIdFondos;
        //     divisaVO.ctaClasifica = this.ctaClasifica;
        //     divisaVO.conSelected = this.conSelected;
        //     divisaVO.divIdBanco = this.divIdBanco;
            
        //     return divisaVO;
        // }
		
		public  toString():string{
				return " divId: " + this.divId;
		}
    }
