
	export class SectorEconomicoVO
	{
		public  secId : Number;
	    public  secDescripcion : String;
	 	public  secCnbv : String;
		public  secBanxico : String;

		/**
		 * Clave de sector para Sibamex
		 */
		public  tmpClSectorId : String;

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
