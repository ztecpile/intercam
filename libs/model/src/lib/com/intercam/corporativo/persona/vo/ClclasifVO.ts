
	export class ClclasifVO
	{
		public  ClclasifVO()
		{
		}
		
		public  clClasifId : Number
		public  claNumero : String
		public  claDescri : String
		public  claAbrevi : String
		public  claAcceso : String
		public  numTransac : String
		public  transaccio : String
		public  usuario : String
		public  fechaSis : Date 
		public  sucOrigen : String
		public  sucDestino : String
		
        public  get perClasif () : String {
            return this.claNumero;
        }
        
		
	}
