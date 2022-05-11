
	export class ClclasifVO
	{
		public  ClclasifVO()
		{
		}
		
		public  clClasifId : number
		public  claNumero : string
		public  claDescri : string
		public  claAbrevi : string
		public  claAcceso : string
		public  numTransac : string
		public  transaccio : string
		public  usuario : string
		public  fechaSis : Date 
		public  sucOrigen : string
		public  sucDestino : string
		
        public  get perClasif () : string {
            return this.claNumero;
        }
        
		
	}
