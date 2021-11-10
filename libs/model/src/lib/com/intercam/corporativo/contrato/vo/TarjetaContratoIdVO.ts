
	export class TarjetaContratoIdVO
	{   
	    public  tarId : Number;
	    public  conId : Number;
	    public  perId : Number;
	    public  cpeConsecLegado : Number;
	    
	    /**
	    * Constructor de la clase.
	    */
		public constructor()
		{
			
		}
		
		public  toString():String{
			
			return this.tarId.toString() + ',' + this.conId.toString() + ',' + this.perId.toString() + ',' + this.cpeConsecLegado.toString();
		}
	     
	}
