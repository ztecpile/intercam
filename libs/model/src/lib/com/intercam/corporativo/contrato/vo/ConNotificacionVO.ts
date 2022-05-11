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
		public  cnoTipo : string;
		/**
		 * Lenguaje
		 */
		public  cnoLenguaje : string;
		/**
		 * Producto o Reporte
		 */
		public  cnoProducto : string;
		/**
		 * Codigo ISO de la moneda
		 */
		public  cnoMoneda : string;
		/**
		 * Medio Predeterminado
		 */
		public  cnoMedio : string;
		/**
		 * Envio Automatico
		 */
		public  cnoEnvioAutomatico : string;
		/**
		 * Destinatarios de e-mail
		 */
		public  cnoDestinatarios : string;
		/**
		 * Cantidad de Decimales
		 */
		public  cnoCantDecimales : number;
		/**
		 * Nombre del Contacto
		 */
		public  cnoContacto : string;
		/**
		 * Cuenta Numerada
		 */
		public  cnoCuentaNumerada : string;
		/**
		 * Status de Activo o Suspendido
		 * */
		public  cnoEstatus : string;
		
		public  cnoFhalta : Date;
		
		public  cnoUsuario : string;
		
		public  cnoJustificacion : string;
		
		public  cnoPassword: string;
		
		public  get consecutivo(): number{
			return this.idVO.cnoConsecutivo;
		}
		
		public constructor()
		{
			this.idVO = new ConNotificacionIdVO();
			this.cnoCantDecimales = 0;
		}
	}
