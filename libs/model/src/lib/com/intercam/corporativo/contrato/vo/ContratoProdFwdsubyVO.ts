import { ContratoProdFwdsubyIdVO } from "./ContratoProdFwdsubyIdVO";
import { ProductoFwdSubyVO } from "./ProductoFwdSubyVO";

    export class ContratoProdFwdsubyVO
    {
		public  idVO:ContratoProdFwdsubyIdVO;
		public  productoFwdSubyVO:ProductoFwdSubyVO;
		public  cpfEstatus:string;
		public  cpfUsuUsuario:string;
		public  cpfFhAltaStr:string;
		public  descrProd:string;

        /**
         * Regresa la interpretacion en String del objeto.
         */
        public  toString() : string
        {
            return this.idVO.toString() + " " + this.productoFwdSubyVO.toString();
        }
    }
