import { ContratoPerfilInversionVO } from "./ContratoPerfilInversionVO";
import { ContratoProdGestionInvVO } from "./ContratoProdGestionInvVO";
import { TipoClienteSInversionVO } from "./TipoClienteSInversionVO";
import { TipoServicioInversionVO } from "./TipoServicioInversionVO";

	export class ContratoServicioInvVO{
		
		/**
		 *id contrato 
		 */
		public  conId:number;
		
		public  tipoServicioInversionVO:TipoServicioInversionVO;
		
		public  tipoClienteSInversionVO:TipoClienteSInversionVO;
		
		public  contratoProdGestionInvVO:ContratoProdGestionInvVO;
		
		public  contratoPerfilInversionVO:ContratoPerfilInversionVO;
		
		public  csiDiscrecional:boolean;
		
		public  csiPeridAsesor:number;
		
		public  csiAsesorInv:boolean;
		
		public  conCcomisAut:boolean;
		
		public  csiIngreso:boolean;
		
		public  csiInversion:boolean;

	}
