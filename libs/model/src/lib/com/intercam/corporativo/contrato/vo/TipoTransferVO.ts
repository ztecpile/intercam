
    export class TipoTransferVO{
        
        public   ttransId : number;
        public   ttransDescripcion : String;
        public   ttransSupDesc : String;
        
        
        public constructor()
        {
        }
        
        /**
         * Obtiene la representación String del objeto.
         */  
        public  toString() : String{
            return this.ttransId.toString()+'  '+this.ttransDescripcion.toString(); 
        }
    }
