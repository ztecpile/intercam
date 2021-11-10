import { ContratoProdFwdsubyIdVO } from "./ContratoProdFwdsubyIdVO";
import { ProductoFwdSubyVO } from "./ProductoFwdSubyVO";

    export class ContratoProdFwdsubyVO
    {
		public  idVO:ContratoProdFwdsubyIdVO;
		public  productoFwdSubyVO:ProductoFwdSubyVO;
		public  cpfEstatus:String;
		public  cpfUsuUsuario:String;
		public  cpfFhAltaStr:String;
		public  descrProd:String;

        /**
         * Regresa la interpretacion en String del objeto.
         */
        public  toString() : String
        {
            return this.idVO.toString() + " " + this.productoFwdSubyVO.toString();
        }
    }
