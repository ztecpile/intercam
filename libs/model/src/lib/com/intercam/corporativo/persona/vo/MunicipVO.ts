import { ColoniaVO } from "./ColoniaVO";
import { EntidadVO } from "./EntidadVO";

	export class MunicipVO
	{
		public  munClave : number;
		public  entidadVO : EntidadVO;
     	public  munDescrip : string;
     	public  munCnbvClave : string;
		public  tmpCiudadIdSiif : number;
		public  tmpEdoIdSiif : number;
		public  coloniasVO : Set <ColoniaVO>;
		public  munLocNumero : string;
		public  munEsFronterizo : boolean;

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
