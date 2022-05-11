import { ContratoUnidadNegocioIdVO } from "./ContratoUnidadNegocioIdVO";
import { UnidadNegocioVO } from "./UnidadNegocioVO";

    export class ContratoUnidadNegocioVO
    {
		public  idVO:ContratoUnidadNegocioIdVO;
		public  uncEstatus:string;
		public  usuUsuario:string;
		public  uncFaltaStr:string;
		public  unidadNegocioVO:UnidadNegocioVO;
		public  ctaBanco:string;
		public  traHabilitaPortal:string;
		public  uncCargoTotal:boolean;
		
		public constructor() {
		
		}
}
