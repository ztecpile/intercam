import { DireccionVO } from "../../persona/vo/DireccionVO";
import { CiaTarjetaVO } from "./CiaTarjetaVO";

	export class TarjetaVO
	{   
	    
	    public  tarId : Number;
	    public  ciaVO : CiaTarjetaVO;
	    public  documentoVO : any; // DocumentoVO;
	    public  direccionVO : DireccionVO;
	    public  tarIdIitular : Number;
	    public  tarFaltaStr : String;
	    public  tarTitular : String;
	    public  tarNumero : String;
	    public  tarFvigenciaStr : String;
	    public  tarEstatus : Boolean;
	    public  tarNumeroIdentificacion : String;
	    public  tarNombreMadre : String;
	    
	    public  tarAniversarioStr : String;
	    public  tarTitularPat : String;
        public  tarTitularMat : String;
        public  tarTitularEmail : String;
		/**
		 * Usuario POS que modifica o reasigna la tarjeta
		 */
		public  usuUsuario : String;
        
        /**
         * Pregunta tarjeta
         */
        public  preId : Number;
        
        /**
         * Tipo Tarjeta
         */
        public  ttaId : Number;
        
	    /**
	    * Constructor de la clase.
	    */
		public constructor()
		{
			this.ciaVO = new  CiaTarjetaVO();
			//this.documentoVO = new DocumentoVO();
			this.direccionVO = new DireccionVO();
		}
		
		public  toString():String{
			return this.tarId.toString();
		}
	     
	}
