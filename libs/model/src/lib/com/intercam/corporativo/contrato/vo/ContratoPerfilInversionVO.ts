import { ContratoProdGestionInvVO } from "./ContratoProdGestionInvVO";

	export class ContratoPerfilInversionVO{
		
		/**
		 * id
		 */
		public  cpiId:Number;
		
		/**
		 * id Tipo de Servicio de Inversion
		 */
		public  tsiId:Number;
		
		/**
		 * Descripcion
		 */
		public  cpiDesc:String;
		
		/**
		 * Estatus
		 */
		public  cpiEstatus:String;

		/**
		 * puntaje correspondiente al perfil
		 */
		public  cpiPuntaje:Number;

		/**
		 * id perfil de inversion en lumina 
		 **/
		public  cpiLuminaId:Number;
		
		/**
		 * Lista de Contrato Porducto Inversion
		 */

		 // List<ContratoProdGestionInvVO> listContratoProdGestionInvVO = new ArrayList<ContratoProdGestionInvVO>();
		public  listContratoProdGestionInvVO: ContratoProdGestionInvVO[];
	}

