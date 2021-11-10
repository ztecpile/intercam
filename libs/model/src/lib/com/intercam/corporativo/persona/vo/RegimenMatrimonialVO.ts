
	export class RegimenMatrimonialVO
	{
        /**
        * id de la tabla
        **/ 
		public  rgmId : Number;
        /**
        * Nombre del regimen
        **/ 
	    public  rgmNombre : String;
        /**
        * Identificador de YATLA (FIDEICOMISO)
        **/ 
        public  rgmYatla : String;
        /**
        * Determina el estatus del regimen
        **/ 
        public  rgmActivo : Boolean;
        
		/**
	    * Constructor de la clase.
	    */
	    public  RegimenMatrimonialVO() {
	    	
	    }
		
        /**
        * Se utiliza para la configuracion del campo requerido para fideicomiso
        **/ 
		public  pefRegimenCony():Number{
			return this.rgmId;		
		}
	}
