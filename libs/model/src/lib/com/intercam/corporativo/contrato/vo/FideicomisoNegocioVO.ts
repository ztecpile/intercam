
    export class FideicomisoNegocioVO {
        /**
         * Id de la entidad
         **/
        public  finId : number;
        /**
         * Nombre del Negocio de Fideicomiso
         **/
        public  finNombre : string;
        /**
         * Id/clave que se maneja en YATLA
         **/
        public  finYatla : number;
        /**
         * Determina si el negocio esta activo
         **/
        public  finActivo : boolean;
		
        /********************************************************
         * Constructor
         * *******************************************************/
		public constructor()
		{
			
		}
    }
