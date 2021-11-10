
    export class ActivosTransferVO{
        
        public  actId : number;
        public  ecuId : number;
        public  actCantidad : number;
        public  actDescripcion : string;
        public  actCusip : string;
        public  actFondo : string;
        public  actInstruccion : boolean;
        public  actOpcDividendos : boolean;
        public  actOpcGanancia : boolean;
        public  eliminar : boolean;
        
        public  ActivosTransferVO(){
            this.actCantidad = 0;
            this.eliminar = false;
        }
        
        /**
         * Obtiene la representación String del objeto.
         */  
        public  toString() : String{
            return this.actId.toString(); 
        }
    }
