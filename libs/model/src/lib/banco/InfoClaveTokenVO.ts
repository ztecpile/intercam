export class InfoClaveTokenVO{

	
    	/**
		 * Token (clave dinámica) en el dispositivo del usuario
		 */
		public  token :string;
		/**
		 * Numero de serie del dispositivo del usuario.
		 * Es el valor como aparece en NBUSUARI ó en BEUSUARI, 
		 * en caso de ser Token de Safenet aparece como String Vacio.
		 */
		public  usuDisAcc :string;
		/**
		 * Cuenta del cliente; tmpClaveLegada en POS, Usu_Client en NBUSUARI y Usu_Cuenta en BEUSUARI.
		 */
		public  cuentaToken :string;
		/**
		 * Nombre de Usuario de la Cuenta con autorizacion de uso de la Cuenta.
		 * Usu_Nombre tanto para NBUSUARI como para BEUSUARI
		 */ 
		public  personaAutorizada :string;
		/**
		 * Sí este valor es diferente a NULL entonces el Token validado es Correcto y 
		 * este valor representa el momento de validación en caso contrario el Token es Incorrecto. 
		 */
		public  momentoValidado : Date;
		/**
		 * Usuario como se registra en SAM, coresponde al campo Tok_UsuSam de NBTOKMOV
		 */ 
		public  tokUsuSam :string;
		/**
		 * El server challenge para Tipo de Token Movil o Fisico de Safenet
		 */
		public  serverChallenge :string;
		/**
		 * El server ticket o request ID para Tipo de Token Movil o Fisico de Safenet
		 */
		public  serverTicket :string;
		/**
		 * Numero de usuario (corresponde al campo Usu_Numero)
		 */
		public  numUsuario:string;
		
		  /**
         * Constructor de la clase.
         */
           constructor()
           {
			this.momentoValidado = null;
		    }


}