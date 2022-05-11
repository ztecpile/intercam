
    export class TipoTransferVO{
        
        public   ttransId : number;
        public   ttransDescripcion : string;
        public   ttransSupDesc : string;
        
        
        public constructor()
        {
        }
        
        /**
         * Obtiene la representación String del objeto.
         */  
        public  toString() : string{
            return this.ttransId.toString()+'  '+this.ttransDescripcion.toString(); 
        }
    }
