
    export class FideicomisoTipoVO 
    {
        /**
         * Id de la entidad
         **/
        public  fitId : number;
        /**
         * Nombre del tipo de Fideicomiso
         **/
        public  fitNombre : string;
        /**
         * Id/clave que se maneja en YATLA
         **/
        public  fitYatla : number;
        /**
         * Determina si el negocio esta activo
         **/
        public  fitActivo : boolean;
		
        /********************************************************
         * Constructor
         * *******************************************************/
		public constructor()
		{
			
		}
    }
