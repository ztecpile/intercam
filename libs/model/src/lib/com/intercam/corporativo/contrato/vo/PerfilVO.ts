// ActionScript file

    export class PerfilVO
    {
        public constructor()
        {
        	this.tmpCvelegSiif = 0;
        }
		
		public  perfId : number;
        public  perfDescripcion : string;
        public  perfEstatus : string;
        public  tmpCvelegSiif : number;
	    public  tconId : number;        
	    public  tmpCvelegSabi : string;
	    public  tpeClave : string;
        public  perfTpeClave: string;
        
        /**
        * iable para determinar cuantas personas tienen este Perfil (FIDEICOMISO)
        * Se usa en ResumenPorPerfil.mxml
        **/ 
        public  totalPerfil : number;
	}

