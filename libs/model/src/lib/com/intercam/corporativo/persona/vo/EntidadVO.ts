import { MunicipVO } from "./MunicipVO";

	export class EntidadVO
	{
		public  entClave : number;
		public  entDescripcion : string;
		public  municipiosVO : Set <MunicipVO>;
		public  entCnbvClave : string;
		public  paiClave : number;
		
		public  entIsoCodeBrx:string;
		public  entRiesgo : number;
		public  entAbrv : string;
		
		/**
		 * Constructor de la clase.
		 */
		public  EntidadVO()
		{
			this.entDescripcion = '';
			this.entRiesgo = 0;
			this.entClave=null;
			this.entAbrv=null;
			this.entIsoCodeBrx=null;
		}
	}
