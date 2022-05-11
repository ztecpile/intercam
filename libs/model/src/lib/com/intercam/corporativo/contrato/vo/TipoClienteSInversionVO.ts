import { TipoServicioInversionVO } from "./TipoServicioInversionVO";

	export class TipoClienteSInversionVO
	  {
		
		/**
		 * id tipo cliente inversion
		 */
		public   tciId:number;
		
		/**
		 * descripcion
		 */
		public   tciDesc:string;
		
		/**
		 * Tipo de contrato
		 */
		public   tconId:number;
		
		/**
		 * Estatus
		 */
		public   tciEstatus:string;
		
		/**
		 * Lista de Tipo servicio Inversion
		 */
		//List<TipoServicioInversionVO> listTipoServicioInversionVO = new ArrayList<TipoServicioInversionVO>()
		public  listTipoServicioInversionVO: TipoServicioInversionVO[];
		
		}
