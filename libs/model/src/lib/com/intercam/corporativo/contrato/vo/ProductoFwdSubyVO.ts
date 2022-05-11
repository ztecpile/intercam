import { ProductoFwdSubyIdVO } from "./ProductoFwdSubyIdVO";

    export class ProductoFwdSubyVO
    {
		
		public  idVO:ProductoFwdSubyIdVO = new ProductoFwdSubyIdVO();
		
		public  prsDescripcion:string = "";
   
        /**
         * Regresa la interpretacion en String del objeto.
         */
        public  toString() : string
        {
            return this.idVO.toString() + " " + this.prsDescripcion;
        }
    }
