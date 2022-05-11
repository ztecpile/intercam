import { ContratoFolderFondosVO } from "./ContratoFolderFondosVO";

    export class SolicitudContratoVO
    {
        
        
        public  scoId:number;
        public  tconId:number;
        public  scoNomCorto:string;
        public  scoIdentifiacion:string;
        public  perId:number;
        public  scoUsuario:string;
        public  scoFalta:Date;
        public  scoDatos:string;
        public  scoEstatus:string;
        public  conId:number;      
        
        public  contrato:ContratoFolderFondosVO = new ContratoFolderFondosVO(); 

        /**
         * Constructor de la clase.
         */
        public constructor()
        {
            this.contrato = new ContratoFolderFondosVO();
        }
    }
