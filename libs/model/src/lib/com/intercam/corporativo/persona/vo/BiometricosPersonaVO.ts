
	export class BiometricosPersonaVO {
		
		/**
		 * ID del registro de huella
		 */
		public  bipId : number;
		
		/**
		 * ID de la persona
		 */
		public  perId : number;
		
		/**
		 * ID de la transaccion de fimpe
		 */
		public  trfId : number;
		
		/**
		 * Imagen escaneada del dedo
		 */
		public  bipBiometrico : any; //ByteArray;
		
		/**
		 * Especifica el dedo escaneado
		 */
	 	public  bipTipo : number;
		
		/**
		 * Posicion del dedo
		 */
		public  bipPosicion : string;
		
		public  BiometricosPersonaVO(){
			
		}
	}
