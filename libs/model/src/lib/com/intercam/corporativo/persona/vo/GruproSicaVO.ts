
	export class GruproSicaVO
	{
		public  GruproSicaVO() 
		{			
		}	
    	public  clvSuc:String;
		public  cl1Gru:number;
		public  cl2Gru:number;
		public  desGru:String;
		
		public  toString():String{
				 const s = "[ "+ this.cl1Gru + " - " +  this.cl2Gru + "]" ;
				return s;
		}
	}
	
	
