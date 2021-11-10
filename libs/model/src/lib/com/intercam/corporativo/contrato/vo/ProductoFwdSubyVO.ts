import { ProductoFwdSubyIdVO } from "./ProductoFwdSubyIdVO";

    export class ProductoFwdSubyVO
    {
		
		public  idVO:ProductoFwdSubyIdVO = new ProductoFwdSubyIdVO();
		
		public  prsDescripcion:String = "";
   
        /**
         * Regresa la interpretacion en String del objeto.
         */
        public  toString() : String
        {
            return this.idVO.toString() + " " + this.prsDescripcion;
        }
    }
