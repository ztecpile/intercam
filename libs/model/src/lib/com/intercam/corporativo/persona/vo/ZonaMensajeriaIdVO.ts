import { SucursalVO } from "../../centrocostos/vo/SucursalVO";

	export class ZonaMensajeriaIdVO
	{
		public  zomClave : String;
	    public  sucursalVO : SucursalVO;
		/**
	    * Constructor de la clase.
	    */
	    public  constructor()
	    {
	    	this.zomClave = '';
	    	this.sucursalVO = new SucursalVO();
	    }
	    /**
	     * Obtiene la representación String del objeto.
	     */
	    public  toString() : String
	    {
	    	return this.zomClave + ',' + this.sucursalVO.sucClave;
	    }
	}
