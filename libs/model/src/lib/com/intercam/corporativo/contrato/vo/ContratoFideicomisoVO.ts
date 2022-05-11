import { ContratoVO } from "./ContratoVO";

	export class ContratoFideicomisoVO extends ContratoVO
	{
		public 	 cfsoReferencia:string;
		public   fitId:number;
		public   fcatId:number;

		public 	 cfsoConstLugar:string; 
		public   cfsoConstFecha:string;
		public 	 cfsoFiduciaria:string;
        
        public 	 cfsoFiduciariaRfc:string;
        public 	 cfsoFiduciariaEfirma:string;
        public 	 cfsoEfirmaVigencia:string;
        
        public  cfsoFalta : Date;
        public  cfsoFactualiza : Date;

		public constructor()
		{
			super();
		}
	}
