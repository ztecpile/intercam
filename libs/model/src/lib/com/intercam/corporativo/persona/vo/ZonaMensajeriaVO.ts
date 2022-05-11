import { ZonaMensajeriaIdVO } from "./ZonaMensajeriaIdVO";

	export class ZonaMensajeriaVO
	{
		public  idVO : ZonaMensajeriaIdVO;
	    public  zomDescripcion : string;
		/**
	    * Constructor de la clase.
	    */
	    public  ZonaMensajeriaVO()
	    {
	    	this.zomDescripcion = '';
	    	this.idVO = new ZonaMensajeriaIdVO();
	    }
	    
	    public  toString() : string
	    {
	    	return this.idVO.toString();
	    }
	}
