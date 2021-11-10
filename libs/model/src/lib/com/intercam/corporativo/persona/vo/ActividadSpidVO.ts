
	export class ActividadSpidVO {
		
		public  actId : number;
		
		public  actDescripcion : string;
		

		public  ActividadSpid()
		{   
			
		}
		
        /**
         * Metodo que establece la clave o identificador de la actividad SPID
         * Se utiliza para el manejo dinamico de combos en las repetitivas de cuentas
         **/
        public  set codigo(newCodigo: number) {
            this.actId = newCodigo;
        }
        
        /**
         * Metodo que regresa la clave o identificador de la actividad SPID
         * Se utiliza para el manejo dinamico de combos en las repetitivas de cuentas
         **/
        public  get codigo(): number {
            return this.actId;
        }
        
        /**
         * Metodo que establece la descripcion de la actividad SPID
         * Se utiliza para el manejo dinamico de combos en las repetitivas de cuentas
         **/
        public  set descripcion(newDescripcion: string) {
            this.actDescripcion = newDescripcion;
        }
        
        /**
         * Metodo que regresa la descripcion de la actividad SPID
         * Se utiliza para el manejo dinamico de combos en las repetitivas de cuentas
         **/
        public  get descripcion(): string {
            return this.actDescripcion;
        }
	}
