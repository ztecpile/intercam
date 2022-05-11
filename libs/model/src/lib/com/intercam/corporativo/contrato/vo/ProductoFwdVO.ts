import { ProductoFwdSubyVO } from "./ProductoFwdSubyVO";

export class ProductoFwdVO
    {
		
		public  prdfId:number;
		public  prdfDescripcion:string;
		public  productoFwdSubiesVO:Set <ProductoFwdSubyVO>;
        public  prdfDesLarga: string;
        
        /**
         * Regresa la interpretacion en String del objeto.
         */
        public  toString() : string
        {
            return this.prdfId.toString() + " " + this.prdfDescripcion;
        }
    }
