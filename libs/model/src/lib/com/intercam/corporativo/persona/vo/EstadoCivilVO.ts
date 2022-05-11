
	export class EstadoCivilVO
	{
		public  edcId : number;
	    public  edcDescripcion : string;
	    // La descripci&ocuote;n en ingles del estado civil
        public  edcDescIng : string; //edc_desc_ing
    
        /**
         * Id estado civil Broxel 
         */
        public  edcBrxId : number;
        
		/**
	    * Constructor de la clase.
	    */
	    public EstadoCivilVO()
	    {
	    	this.edcDescripcion = '';
	    	this.edcDescIng = '';
	    }
		
		public  toString():string{
			return this.edcDescripcion;		
		}
        
        /**
        * Se utiliza para la configuracion del campo requerido para fideicomiso
        **/ 
        public  get EdcId():number{
            return this.edcId;		
        }
        
        public  set EdcId(value: number) {
            this.edcId = value;
        }
	}
