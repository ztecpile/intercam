
	export class BiometricosPersonaVO {
		
		/**
		 * ID del registro de huella
		 */
		public  bipId : Number;
		
		/**
		 * ID de la persona
		 */
		public  perId : Number;
		
		/**
		 * ID de la transaccion de fimpe
		 */
		public  trfId : Number;
		
		/**
		 * Imagen escaneada del dedo
		 */
		public  bipBiometrico : any; //ByteArray;
		
		/**
		 * Especifica el dedo escaneado
		 */
	 	public  bipTipo : Number;
		
		/**
		 * Posicion del dedo
		 */
		public  bipPosicion : String;
		
		public  BiometricosPersonaVO(){
			
		}
	}
