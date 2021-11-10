import { TipoServicioInversionVO } from "./TipoServicioInversionVO";

	export class TipoClienteSInversionVO
	  {
		
		/**
		 * id tipo cliente inversion
		 */
		public   tciId:Number;
		
		/**
		 * descripcion
		 */
		public   tciDesc:String;
		
		/**
		 * Tipo de contrato
		 */
		public   tconId:Number;
		
		/**
		 * Estatus
		 */
		public   tciEstatus:String;
		
		/**
		 * Lista de Tipo servicio Inversion
		 */
		//List<TipoServicioInversionVO> listTipoServicioInversionVO = new ArrayList<TipoServicioInversionVO>()
		public  listTipoServicioInversionVO: TipoServicioInversionVO[];
		
		}
