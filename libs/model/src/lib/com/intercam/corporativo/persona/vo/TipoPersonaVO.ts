
    export class TipoPersonaVO
    {
    	public  tpeClave : string;
        public  tpeDescripcion : string;
        public  tmpCveLegSabi : string;
        public  tmpCveLegSiff : number;
        /**
         * Constructor de la clase
         */  
        public  TipoPersonaVO()
        {
        	this.tpeClave = '';
	        this.tpeDescripcion = '';
	        this.tmpCveLegSabi = '';
	        this.tmpCveLegSiff=0;
        }

        /**
         * Metodo que establece la clave o identificador del tipo de persona
         * Se utiliza para el manejo dinamico de combos en las repetitivas de cuentas
         **/
        public  set codigo(newCodigo) {
            this.tpeClave = newCodigo;
        }
        
        /**
         * Metodo que regresa la clave o identificador del tipo de persona
         * Se utiliza para el manejo dinamico de combos en las repetitivas de cuentas
         **/
        public  get codigo(): string {
            return this.tpeClave;
        }
        
        /**
         * Metodo que establece la descripcion del tipo de persona
         * Se utiliza para el manejo dinamico de combos en las repetitivas de cuentas
         **/
        public  set descripcion(newDescripcion) {
            this.tpeDescripcion = newDescripcion;
        }
        /**
         * Metodo que regresa la descripcion del tipo de persona
         * Se utiliza para el manejo dinamico de combos en las repetitivas de cuentas
         **/
        public  get descripcion(): string {
            return this.tpeDescripcion;
        }
        
	}
