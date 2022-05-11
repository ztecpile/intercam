import { TelefonoVO } from "../../persona/vo/TelefonoVO";

	export class TarTelefonoIdVO
	{   
	    public  tarId : number;
	    
	    public  telIdVO : TelefonoVO;
	    
	    
	    /**
	    * Constructor de la clase.
	    */
		public constructor()
		{
			this.telIdVO = new TelefonoVO();
		}
		
		public  toString():string{
			
			return this.tarId.toString() + ',' + this.telIdVO.toString();
		}
	     
	}
