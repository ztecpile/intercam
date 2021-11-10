import { ContratoUnidadNegocioVO } from "./ContratoUnidadNegocioVO";
import { UnidadNegTcontratoVO } from "./UnidadNegTcontratoVO";

    export class UnidadNegocioVO
    {
		public  unegId:Number;
		public  unegDescrip:String;
		public  usuUsuario:String;
		public  unegFalta:String;
		public  contratoUnidadNegocios: Set <ContratoUnidadNegocioVO>;
		public  unidadNegTcontratos:Set <UnidadNegTcontratoVO>;
	}
