import { TipoActaIdVO } from "./TipoActaIdVO";

	export class TipoActaVO
	{
		public  idVO : TipoActaIdVO;
     	public  tacDescrip : String ;
	    
		/**
	    * Constructor de la clase.
	    */
	    public  TipoActaVO()
	    {
	    	this.idVO = new TipoActaIdVO();
	    }
	    
	    public  toString():String{
	    	return this.idVO.toString();
	    }
	}
