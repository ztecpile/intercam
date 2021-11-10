import { CalifClienteIdVO } from "./CalifClienteIdVO";

	export class CalifClienteVO
	{
		public  idVO : CalifClienteIdVO;
		public  perId : Number;
		public  carClave : String;
		public  clvAgrupa : String;
		public  cacFaltaStr : String;
		public  cacEstatus : Boolean;
		
	    
		/**
	    * Constructor de la clase.
	    */
	    public constructor()
	    {
	    	this.idVO = new CalifClienteIdVO();
	    }
	    
	    public toString():String{
	    	return this.idVO.toString();
	    }
	}
