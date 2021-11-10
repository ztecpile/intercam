
    export class ContratoProdFwdsubyIdVO
    {
		public  prsId:Number;
		public  prdfId:Number;
		public  conId:Number;

        /**
         * Regresa la interpretacion en String del objeto.
         */
        public toString() : String{
            return " prsId" + this.prsId.toString() + " prdfId" + this.prdfId.toString() + " conId" + this.conId;
        }
    }
