
    export class ProductoFwdSubyIdVO
    {
		public  prsId:number;
		public  prdfId:number;

        /**
         * Regresa la interpretacion en String del objeto.
         */
        public  toString() : string
        {
            return this.prsId.toString() + " " + this.prdfId.toString();
        }
    }
