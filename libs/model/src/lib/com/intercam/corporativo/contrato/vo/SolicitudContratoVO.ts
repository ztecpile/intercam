import { ContratoFolderFondosVO } from "./ContratoFolderFondosVO";

    export class SolicitudContratoVO
    {
        
        
        public  scoId:Number;
        public  tconId:Number;
        public  scoNomCorto:String;
        public  scoIdentifiacion:String;
        public  perId:Number;
        public  scoUsuario:String;
        public  scoFalta:Date;
        public  scoDatos:String;
        public  scoEstatus:String;
        public  conId:Number;      
        
        public  contrato:ContratoFolderFondosVO = new ContratoFolderFondosVO(); 

        /**
         * Constructor de la clase.
         */
        public constructor()
        {
            this.contrato = new ContratoFolderFondosVO();
        }
    }
