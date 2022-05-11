
	export class TarjetaContratoIdVO
	{   
	    public  tarId : number;
	    public  conId : number;
	    public  perId : number;
	    public  cpeConsecLegado : number;
	    
	    /**
	    * Constructor de la clase.
	    */
		public constructor()
		{
			
		}
		
		public  toString():string{
			
			return this.tarId.toString() + ',' + this.conId.toString() + ',' + this.perId.toString() + ',' + this.cpeConsecLegado.toString();
		}
	     
	}
