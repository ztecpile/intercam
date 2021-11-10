

	export class ErrorContratoVO
	{
		/**
		 * Descripcion del error
		 * */
		public  descripcion : String;
		/**
		 * Identificador de la pantalla donde se presenta el error
		 * */
		public  idPantalla : String;
		/**
		 * Nombre de la pantalla donde se presenta el error
		 * */
		public  nombrePantalla : String;
		/**
		 * Identificador del campo donde se presenta el error
		 * */
		public  idCampo : String;
		/**
		 * Nombre de la clase del objeto que involucra el error
		 * */
		public  clase : String;
		
		/**
		 * Constructor por default
		 * */
		public constructor() {
		}
		
	}
