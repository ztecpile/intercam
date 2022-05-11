import { EntidadVO } from "../../persona/vo/EntidadVO";
import { ActivosTransferVO } from "./ActivosTransferVO";
import { TipoTransferVO } from "./TipoTransferVO";

    export class EdoCuentaTransferVO{
        
        public  ecuId : number;
        public  tipoTransferVO : TipoTransferVO;
        public  conId : number;
        public  ecuNumero : string;
        public  ecuNomBanco : string;
        public  ecuNombre : string;
        public  ecuContacto : string;
        public  ecuDireccion : string;
        public  entidadVO : EntidadVO;
        public  entClave : number;
        public  munClave : number;
        public  ecuCp : string;
        public  ecuTelefono : string;
        public  activosTransferVO: Set <ActivosTransferVO>;
        
        public constructor()
        {
            this.tipoTransferVO = new TipoTransferVO();
            this.entidadVO = new EntidadVO();
            //this.activosTransferVO = new ArrayCollection();
        }
        
        /**
         * Obtiene la representación string del objeto.
         */  
        public  toString() : string{
            return this.ecuId.toString(); 
        }
    }
