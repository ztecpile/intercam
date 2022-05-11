import { ContratoPerfilInversionVO } from "./ContratoPerfilInversionVO";

	export class TipoServicioInversionVO 
	{
		
		/**
		 * id
		 */
		public  tsiId:number;
		
		/**
		 * Descripcion
		 */
		public  tsiDesc:string;
		
		/**
		 * Estatus
		 */
		public  tsiEstatus:string;
		
		/**
		 * valida si es requerido el cuestionario de perfilamiento
		 */
		public  tsiCuesperf:boolean;
		
		/**
		 * V Se muestra el Tipo de Servicio cuando el cliente es discrecional
		 * F Se muestra el Tipo de Servicio cuando el cliente no es discrecional
		 * A Se muestra el Tipo de Servicio, es indiferente si el cliente es discrecional  
		 */
		public  tsiDiscrecional:string;
		
		/**
		 * id tipo cliente inversion
		 */
		public  tciId:number;
		
		/**
		 * id tipo servicio de inversion en lumina 
		 */
		public  tsiLuminaId:number;


		/**
		 * 
		 */
		//List<ContratoPerfilInversionVO> listContratoPerfilInversionVO = new ArrayList<ContratoPerfilInversionVO>();
		public  listContratoPerfilInversionVO: ContratoPerfilInversionVO[];

		}
