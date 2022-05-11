
	export class ClpuestoVO
	{
		public  ClpuestoVO()
		{
		}
		public  pueNumero : string	
		public  pueDescri : string
		public  numTransac : string
		public  transaccio : string
		public  usuario : string
		public  fechaSis : Date;
		public  sucOrigen : string
		public  sucDestino : string
        
        public  get pefPuesto () : string {
            return this.pueNumero;
        }
	}
