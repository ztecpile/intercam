import { CampaignDetailVO } from "./CampaignDetailVO";

    export class CampaignMasterVO
    {
		public  cmId:Number;
		public  cmDescripcion:String;
		public  cmEstatus:String;
		
		/**
		 * Tipos de contratos separados por comas para los que se habilita la campania
		 */
		public  tconId:Number;
		
		public  campaignDetailsVO: Set<CampaignDetailVO>;
	}
