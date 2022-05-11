

	export class ErrorContratoVO
	{
		/**
		 * Descripcion del error
		 * */
		public  descripcion : string;
		/**
		 * Identificador de la pantalla donde se presenta el error
		 * */
		public  idPantalla : string;
		/**
		 * Nombre de la pantalla donde se presenta el error
		 * */
		public  nombrePantalla : string;
		/**
		 * Identificador del campo donde se presenta el error
		 * */
		public  idCampo : string;
		/**
		 * Nombre de la clase del objeto que involucra el error
		 * */
		public  clase : string;
		
		/**
		 * Constructor por default
		 * */
		public constructor() {
		}
		
	}
