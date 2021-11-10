import { MunicipVO } from "./MunicipVO";

	export class EntidadVO
	{
		public  entClave : Number;
		public  entDescripcion : String;
		public  municipiosVO : Set <MunicipVO>;
		public  entCnbvClave : String;
		public  paiClave : Number;
		
		public  entIsoCodeBrx:String;
		public  entRiesgo : Number;
		public  entAbrv : String;
		
		/**
		 * Constructor de la clase.
		 */
		public  EntidadVO()
		{
			this.entDescripcion = '';
			this.entRiesgo = 0;
		}
	}
