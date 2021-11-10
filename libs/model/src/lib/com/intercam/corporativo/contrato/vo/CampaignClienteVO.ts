
	export class CampaignClienteVO
	{
		public  conid: Number;
		public  tconId: String;
		public  nombre: String;
		public  perIdPromo: Number;
		public  promotor: String;
		public  ccmEstatus: String;
		
		public constructor()
		{
			this.conid = 0;
			this.tconId = '';
			this.nombre = '';
			this.perIdPromo = 0;
			this.promotor = '';
			this.ccmEstatus = '';
			
		}
	}