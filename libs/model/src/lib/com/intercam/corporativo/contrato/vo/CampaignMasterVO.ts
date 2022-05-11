import { CampaignDetailVO } from "./CampaignDetailVO";

    export class CampaignMasterVO
    {
		public  cmId:number;
		public  cmDescripcion:string;
		public  cmEstatus:string;
		
		/**
		 * Tipos de contratos separados por comas para los que se habilita la campania
		 */
		public  tconId:number;
		
		public  campaignDetailsVO: Set<CampaignDetailVO>;
	}
