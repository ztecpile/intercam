
	export class RegimenMatrimonialVO
	{
        /**
        * id de la tabla
        **/ 
		public  rgmId : number;
        /**
        * Nombre del regimen
        **/ 
	    public  rgmNombre : string;
        /**
        * Identificador de YATLA (FIDEICOMISO)
        **/ 
        public  rgmYatla : string;
        /**
        * Determina el estatus del regimen
        **/ 
        public  rgmActivo : boolean;
        
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
