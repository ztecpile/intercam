import { ContratoPerfilInversionVO } from "./ContratoPerfilInversionVO";

	export class TipoServicioInversionVO 
	{
		
		/**
		 * id
		 */
		public  tsiId:Number;
		
		/**
		 * Descripcion
		 */
		public  tsiDesc:String;
		
		/**
		 * Estatus
		 */
		public  tsiEstatus:String;
		
		/**
		 * valida si es requerido el cuestionario de perfilamiento
		 */
		public  tsiCuesperf:Boolean;
		
		/**
		 * V Se muestra el Tipo de Servicio cuando el cliente es discrecional
		 * F Se muestra el Tipo de Servicio cuando el cliente no es discrecional
		 * A Se muestra el Tipo de Servicio, es indiferente si el cliente es discrecional  
		 */
		public  tsiDiscrecional:String;
		
		/**
		 * id tipo cliente inversion
		 */
		public  tciId:Number;
		
		/**
		 * id tipo servicio de inversion en lumina 
		 */
		public  tsiLuminaId:Number;


		/**
		 * 
		 */
		//List<ContratoPerfilInversionVO> listContratoPerfilInversionVO = new ArrayList<ContratoPerfilInversionVO>();
		public  listContratoPerfilInversionVO: ContratoPerfilInversionVO[];

		}
