import { CalifClienteIdVO } from "./CalifClienteIdVO";

	export class CalifClienteVO
	{
		public  idVO : CalifClienteIdVO;
		public  perId : number;
		public  carClave : string;
		public  clvAgrupa : string;
		public  cacFaltaStr : string;
		public  cacEstatus : boolean;
		
	    
		/**
	    * Constructor de la clase.
	    */
	    public constructor()
	    {
	    	this.idVO = new CalifClienteIdVO();
	    }
	    
	    public toString():string{
	    	return this.idVO.toString();
	    }
	}
