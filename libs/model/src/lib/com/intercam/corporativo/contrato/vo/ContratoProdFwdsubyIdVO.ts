
    export class ContratoProdFwdsubyIdVO
    {
		public  prsId:number;
		public  prdfId:number;
		public  conId:number;

        /**
         * Regresa la interpretacion en String del objeto.
         */
        public toString() : string{
            return " prsId" + this.prsId.toString() + " prdfId" + this.prdfId.toString() + " conId" + this.conId;
        }
    }
