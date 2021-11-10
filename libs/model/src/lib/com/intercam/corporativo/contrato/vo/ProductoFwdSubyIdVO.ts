
    export class ProductoFwdSubyIdVO
    {
		public  prsId:Number;
		public  prdfId:Number;

        /**
         * Regresa la interpretacion en String del objeto.
         */
        public  toString() : String
        {
            return this.prsId.toString() + " " + this.prdfId.toString();
        }
    }
