import { ContratoUnidadNegocioVO } from "./ContratoUnidadNegocioVO";
import { UnidadNegTcontratoVO } from "./UnidadNegTcontratoVO";

    export class UnidadNegocioVO
    {
		public  unegId:number;
		public  unegDescrip:string;
		public  usuUsuario:string;
		public  unegFalta:string;
		public  contratoUnidadNegocios: Set <ContratoUnidadNegocioVO>;
		public  unidadNegTcontratos:Set <UnidadNegTcontratoVO>;
	}
