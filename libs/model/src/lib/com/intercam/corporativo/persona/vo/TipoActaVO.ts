import { TipoActaIdVO } from "./TipoActaIdVO";

	export class TipoActaVO
	{
		public  idVO : TipoActaIdVO;
     	public  tacDescrip : string ;
	    
		/**
	    * Constructor de la clase.
	    */
	    public  TipoActaVO()
	    {
	    	this.idVO = new TipoActaIdVO();
	    }
	    
	    public  toString():string{
	    	return this.idVO.toString();
	    }
	}
