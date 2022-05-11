import { DireccionVO } from "../../persona/vo/DireccionVO";
import { CiaTarjetaVO } from "./CiaTarjetaVO";

	export class TarjetaVO
	{   
	    
	    public  tarId : number;
	    public  ciaVO : CiaTarjetaVO;
	    public  documentoVO : any; // DocumentoVO;
	    public  direccionVO : DireccionVO;
	    public  tarIdIitular : number;
	    public  tarFaltaStr : string;
	    public  tarTitular : string;
	    public  tarNumero : string;
	    public  tarFvigenciaStr : string;
	    public  tarEstatus : boolean;
	    public  tarNumeroIdentificacion : string;
	    public  tarNombreMadre : string;
	    
	    public  tarAniversarioStr : string;
	    public  tarTitularPat : string;
        public  tarTitularMat : string;
        public  tarTitularEmail : string;
		/**
		 * Usuario POS que modifica o reasigna la tarjeta
		 */
		public  usuUsuario : string;
        
        /**
         * Pregunta tarjeta
         */
        public  preId : number;
        
        /**
         * Tipo Tarjeta
         */
        public  ttaId : number;
        
	    /**
	    * Constructor de la clase.
	    */
		public constructor()
		{
			this.ciaVO = new  CiaTarjetaVO();
			//this.documentoVO = new DocumentoVO();
			this.direccionVO = new DireccionVO();
		}
		
		public  toString():string{
			return this.tarId.toString();
		}
	     
	}
