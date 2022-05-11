
	export class ConEmailVO {
		
		/**
		 * Almacena Id de la cuenta de Correo
		 */
		public  cemId:number;
		
		/**
		 * Almacena Id del Contrato
		 */
		public  conId:number;
		
		/**
		 * Almacena cuenta de Correo
		 */
		public  cemEmail:string;
		
		/**
		 * Almacena estatus de la cuenta de Correo
		 */
		public  cemSta:string;
		
		/**
		 * Bandera para el manejo del estatus de la cuenta de Correo
		 **/
		public  checkSeleccionado:boolean = true;
		
		/**
		 * Bandera utilizada para indicar si la cuenta de Correo
		 * ha sido seleccionada para el reenv&iacute;o de Factura
		 **/
		public  seleccionado:boolean;
		
	}//class
