// ActionScript file

    export class PerfilVO
    {
        public constructor()
        {
        	this.tmpCvelegSiif = 0;
        }
		
		public  perfId : number;
        public  perfDescripcion : String;
        public  perfEstatus : String;
        public  tmpCvelegSiif : Number;
	    public  tconId : Number;        
	    public  tmpCvelegSabi : String;
	    public  tpeClave : String;
        public  perfTpeClave: String;
        
        /**
        * iable para determinar cuantas personas tienen este Perfil (FIDEICOMISO)
        * Se usa en ResumenPorPerfil.mxml
        **/ 
        public  totalPerfil : Number;
	}

