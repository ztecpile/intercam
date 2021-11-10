import { ConNotificacionIdVO } from "./ConNotificacionIdVO";

	export class ConNotificacionVO
	{
		/**
		 * ID Notificacion
		 */
		public  idVO : ConNotificacionIdVO;
		/**
		 * Indica si la configuracion es para una notificacion o reporte
		 */
		public  cnoTipo : String;
		/**
		 * Lenguaje
		 */
		public  cnoLenguaje : String;
		/**
		 * Producto o Reporte
		 */
		public  cnoProducto : String;
		/**
		 * Codigo ISO de la moneda
		 */
		public  cnoMoneda : String;
		/**
		 * Medio Predeterminado
		 */
		public  cnoMedio : String;
		/**
		 * Envio Automatico
		 */
		public  cnoEnvioAutomatico : String;
		/**
		 * Destinatarios de e-mail
		 */
		public  cnoDestinatarios : String;
		/**
		 * Cantidad de Decimales
		 */
		public  cnoCantDecimales : number;
		/**
		 * Nombre del Contacto
		 */
		public  cnoContacto : String;
		/**
		 * Cuenta Numerada
		 */
		public  cnoCuentaNumerada : String;
		/**
		 * Status de Activo o Suspendido
		 * */
		public  cnoEstatus : String;
		
		public  cnoFhalta : Date;
		
		public  cnoUsuario : String;
		
		public  cnoJustificacion : String;
		
		public  cnoPassword: String;
		
		public  get consecutivo(): Number{
			return this.idVO.cnoConsecutivo;
		}
		
		public constructor()
		{
			this.idVO = new ConNotificacionIdVO();
			this.cnoCantDecimales = 0;
		}
	}
