
	export class CampaignPromotorVO
	{
		public  usuUsuario: string;
		public  nombrePromotor: string;
		public  totalClientes: number;
		public  totalContratos: number;
		public  totalCompletos: number;
		public  totalIncompletos: number;
		
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
