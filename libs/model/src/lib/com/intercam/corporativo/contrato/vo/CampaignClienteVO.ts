
	export class CampaignClienteVO
	{
		public  conid: number;
		public  tconId: string;
		public  nombre: string;
		public  perIdPromo: number;
		public  promotor: string;
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