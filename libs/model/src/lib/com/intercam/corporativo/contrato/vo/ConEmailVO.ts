
	export class ConEmailVO {
		
		/**
		 * Almacena Id de la cuenta de Correo
		 */
		public  cemId:Number;
		
		/**
		 * Almacena Id del Contrato
		 */
		public  conId:Number;
		
		/**
		 * Almacena cuenta de Correo
		 */
		public  cemEmail:String;
		
		/**
		 * Almacena estatus de la cuenta de Correo
		 */
		public  cemSta:String;
		
		/**
		 * Bandera para el manejo del estatus de la cuenta de Correo
		 **/
		public  checkSeleccionado:Boolean = true;
		
		/**
		 * Bandera utilizada para indicar si la cuenta de Correo
		 * ha sido seleccionada para el reenv&iacute;o de Factura
		 **/
		public  seleccionado:Boolean;
		
	}//class
