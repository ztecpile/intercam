import { ContratoProdGestionInvVO } from "./ContratoProdGestionInvVO";

	export class ContratoPerfilInversionVO{
		
		/**
		 * id
		 */
		public  cpiId:number;
		
		/**
		 * id Tipo de Servicio de Inversion
		 */
		public  tsiId:number;
		
		/**
		 * Descripcion
		 */
		public  cpiDesc:string;
		
		/**
		 * Estatus
		 */
		public  cpiEstatus:string;

		/**
		 * puntaje correspondiente al perfil
		 */
		public  cpiPuntaje:number;

		/**
		 * id perfil de inversion en lumina 
		 **/
		public  cpiLuminaId:number;
		
		/**
		 * Lista de Contrato Porducto Inversion
		 */

		 // List<ContratoProdGestionInvVO> listContratoProdGestionInvVO = new ArrayList<ContratoProdGestionInvVO>();
		public  listContratoProdGestionInvVO: ContratoProdGestionInvVO[];
	}

