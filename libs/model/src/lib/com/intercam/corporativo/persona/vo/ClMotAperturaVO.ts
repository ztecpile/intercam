

	export class ClMotAperturaVO
	{
		public  ClMotAperturaVO()
		{
		}
		
		public  idMotApertura : Number
		public  descMotApertura : String
		public  descCortaMotApertura : String
        
        public  get perMotivoAper () : String {
            return this.descCortaMotApertura;
        }
        
	}
