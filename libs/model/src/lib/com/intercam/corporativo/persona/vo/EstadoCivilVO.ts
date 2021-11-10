
	export class EstadoCivilVO
	{
		public  edcId : Number;
	    public  edcDescripcion : String;
	    // La descripci&ocuote;n en ingles del estado civil
        public  edcDescIng : String; //edc_desc_ing
    
        /**
         * Id estado civil Broxel 
         */
        public  edcBrxId : Number;
        
		/**
	    * Constructor de la clase.
	    */
	    public EstadoCivilVO()
	    {
	    	this.edcDescripcion = '';
	    	this.edcDescIng = '';
	    }
		
		public  toString():String{
			return this.edcDescripcion;		
		}
        
        /**
        * Se utiliza para la configuracion del campo requerido para fideicomiso
        **/ 
        public  get EdcId():Number{
            return this.edcId;		
        }
        
        public  set EdcId(value: Number) {
            this.edcId = value;
        }
	}
