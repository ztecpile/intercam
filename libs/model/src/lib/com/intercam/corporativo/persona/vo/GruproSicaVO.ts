
	export class GruproSicaVO
	{
		public  GruproSicaVO() 
		{			
		}	
    	public  clvSuc:string;
		public  cl1Gru:number;
		public  cl2Gru:number;
		public  desGru:string;
		
		public  toString():string{
				 const s = "[ "+ this.cl1Gru + " - " +  this.cl2Gru + "]" ;
				return s;
		}
	}
	
	
