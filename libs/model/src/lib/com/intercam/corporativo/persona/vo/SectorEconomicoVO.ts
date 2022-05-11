
	export class SectorEconomicoVO
	{
		public  secId : number;
	    public  secDescripcion : string;
	 	public  secCnbv : string;
		public  secBanxico : string;

		/**
		 * Clave de sector para Sibamex
		 */
		public  tmpClSectorId : string;

		/**
	    * Constructor de la clase.
	    */
	    public  SectorEconomicoVO()
	    {
	    	this.secId = 0;
	    	this.secDescripcion = '';
	    	this.secCnbv = '';
	    	this.secBanxico = '';
	    }
	}
