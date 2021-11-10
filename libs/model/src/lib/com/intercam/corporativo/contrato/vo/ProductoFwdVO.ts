import { ProductoFwdSubyVO } from "./ProductoFwdSubyVO";

export class ProductoFwdVO
    {
		
		public  prdfId:Number;
		public  prdfDescripcion:String;
		public  productoFwdSubiesVO:Set <ProductoFwdSubyVO>;
        public  prdfDesLarga: String;
        
        /**
         * Regresa la interpretacion en String del objeto.
         */
        public  toString() : String
        {
            return this.prdfId.toString() + " " + this.prdfDescripcion;
        }
    }
