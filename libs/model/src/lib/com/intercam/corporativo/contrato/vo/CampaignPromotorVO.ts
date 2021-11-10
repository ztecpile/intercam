
	export class CampaignPromotorVO
	{
		public  usuUsuario: String;
		public  nombrePromotor: String;
		public  totalClientes: Number;
		public  totalContratos: Number;
		public  totalCompletos: Number;
		public  totalIncompletos: Number;
		
		public constructor()
		{
			this.usuUsuario = '';
			this.nombrePromotor = '';
			this.totalClientes = 0;
			this.totalContratos = 0;
			this.totalCompletos = 0;
			this.totalIncompletos = 0;
			
		}
	}
