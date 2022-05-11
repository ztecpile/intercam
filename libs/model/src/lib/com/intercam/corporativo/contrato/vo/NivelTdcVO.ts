

	export class NivelTdcVO{
		public  nivId:number;
		
		public  nivDesc:string;
		
		public  nivTasa:number;
		
		public  nivTasaMor:number;
		
		public  nivComMor:number;
		
		public  nivCat:number;
		
		public  nivAnual:number;
		
		public  nivRepo:number;
		
		public  nivRcl:number;
		
		public  nivReca:string;
		
		public  fechaLogStr:string;
        
        public  nivCodigoBrox :  string;

		public constructor()
		{
			this.nivTasa = 0;
			this.nivTasaMor = 0;
			this.nivComMor = 0;
		}
	}
