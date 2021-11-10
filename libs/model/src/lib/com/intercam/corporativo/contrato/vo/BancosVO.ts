
	export class BancosVO
	{
		public  banId : number;
		public  banOperaTefbv : string;
		public  banOperaSpeua : string;
		public  banClaveBanxico : string;
	    public  banIdSica : string;
	    public  banIdCasaBolsa : string;
	    public  banIdFondos : string;
	    //public  banClaveSwift : String;
		//public  banClaveAba : String;
	    //public  banClaveChips : String;
	    public  banEstatus : string;
	    public  banOperaIntercam : string;
	    public  banNombre : string;
	    public  paiClave : number;
	    public  paiDescripcion : string;
	    public  banDescCorta:string;
	    
	    
     	/**
	    * Constructor de la clase.
	    */
	    public constructor()
	    {
	    	this.banOperaTefbv = 'F';
	    	this.banOperaSpeua = 'F';
	    	this.banClaveBanxico = '';
	    	this.banIdSica = '';
	    	this.banIdCasaBolsa = '';
	    	this.banIdFondos = '';
	    	this.banEstatus = 'AC';
	    	this.banOperaIntercam = 'F';
	    	this.banNombre = '';

	    }
		
		public  toString():String{
			return "banco: " + this.banNombre;
		}
		
		/**
		 * Determina si el banco es excluido de la evaluacion de la cuenta incluida en la cuenta clave
		 *    Se excluyen los bancos: BANREGIO, INTERBANCO
		 * @return boolean. True: se excluye el banco; false: no se excluye
		 */
		// public  bancoExcluido():Boolean{
		// 	return this.banClaveBanxico &&
		// 		(this.banClaveBanxico == Const.CLV_BANXICO_BANREGIO || this.banClaveBanxico == Const.CLV_BANXICO_INTERBANCO);
		// }
	}
