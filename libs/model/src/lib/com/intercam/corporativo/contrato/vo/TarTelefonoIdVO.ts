import { TelefonoVO } from "../../persona/vo/TelefonoVO";

	export class TarTelefonoIdVO
	{   
	    public  tarId : Number;
	    
	    public  telIdVO : TelefonoVO;
	    
	    
	    /**
	    * Constructor de la clase.
	    */
		public constructor()
		{
			this.telIdVO = new TelefonoVO();
		}
		
		public  toString():String{
			
			return this.tarId.toString() + ',' + this.telIdVO.toString();
		}
	     
	}
