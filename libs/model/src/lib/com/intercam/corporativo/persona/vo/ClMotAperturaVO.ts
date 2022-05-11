

	export class ClMotAperturaVO
	{
		public  ClMotAperturaVO()
		{
		}
		
		public  idMotApertura : number
		public  descMotApertura : string
		public  descCortaMotApertura : string
        
        public  get perMotivoAper () : string {
            return this.descCortaMotApertura;
        }
        
	}
