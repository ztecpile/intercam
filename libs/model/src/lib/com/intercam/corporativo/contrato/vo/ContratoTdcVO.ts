import { ContratoVO } from "./ContratoVO";

	export class ContratoTdcVO extends ContratoVO
	{
		public 	 ctdcNumTotalsystem:string;
		public   ctdcNumPaystudio:number;
		public   ctdcLimCredito:number;

		public 	 nivId:number; 
		public   ctdcLimCreditoSol:number;
		public 	 nivIdSol:number; 

		public constructor()
		{
			super();
			this.ctdcNumTotalsystem = "0";
			this.ctdcNumPaystudio = 0;
			this.ctdcLimCredito = 0;
			this.ctdcLimCreditoSol= 0;
			this.nivIdSol= 0;
		}
	}
