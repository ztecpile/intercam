import { ZonaMensajeriaIdVO } from "./ZonaMensajeriaIdVO";

	export class ZonaMensajeriaVO
	{
		public  idVO : ZonaMensajeriaIdVO;
	    public  zomDescripcion : String;
		/**
	    * Constructor de la clase.
	    */
	    public  ZonaMensajeriaVO()
	    {
	    	this.zomDescripcion = '';
	    	this.idVO = new ZonaMensajeriaIdVO();
	    }
	    
	    public  toString() : String
	    {
	    	return this.idVO.toString();
	    }
	}
