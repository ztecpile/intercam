import { ColoniaVO } from "./ColoniaVO";
import { EntidadVO } from "./EntidadVO";

	export class MunicipVO
	{
		public  munClave : Number;
		public  entidadVO : EntidadVO;
     	public  munDescrip : String;
     	public  munCnbvClave : String;
		public  tmpCiudadIdSiif : Number;
		public  tmpEdoIdSiif : Number;
		public  coloniasVO : Set <ColoniaVO>;
		public  munLocNumero : String;
		public  munEsFronterizo : Boolean;

		/**
	    * Constructor de la clase.
	    */
	    public  MunicipVO()
	    {
	    	this.munDescrip = '';
	    	this.munCnbvClave = '';
	    	this.entidadVO = new EntidadVO();
	    }
	}
