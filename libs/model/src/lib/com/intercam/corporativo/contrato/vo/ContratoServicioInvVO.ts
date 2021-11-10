import { ContratoPerfilInversionVO } from "./ContratoPerfilInversionVO";
import { ContratoProdGestionInvVO } from "./ContratoProdGestionInvVO";
import { TipoClienteSInversionVO } from "./TipoClienteSInversionVO";
import { TipoServicioInversionVO } from "./TipoServicioInversionVO";

	export class ContratoServicioInvVO{
		
		/**
		 *id contrato 
		 */
		public  conId:Number;
		
		public  tipoServicioInversionVO:TipoServicioInversionVO;
		
		public  tipoClienteSInversionVO:TipoClienteSInversionVO;
		
		public  contratoProdGestionInvVO:ContratoProdGestionInvVO;
		
		public  contratoPerfilInversionVO:ContratoPerfilInversionVO;
		
		public  csiDiscrecional:Boolean;
		
		public  csiPeridAsesor:Number;
		
		public  csiAsesorInv:Boolean;
		
		public  conCcomisAut:Boolean;
		
		public  csiIngreso:Boolean;
		
		public  csiInversion:Boolean;

	}
