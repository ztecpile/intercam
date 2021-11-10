import { EntidadVO } from "../../persona/vo/EntidadVO";
import { ActivosTransferVO } from "./ActivosTransferVO";
import { TipoTransferVO } from "./TipoTransferVO";

    export class EdoCuentaTransferVO{
        
        public  ecuId : number;
        public  tipoTransferVO : TipoTransferVO;
        public  conId : number;
        public  ecuNumero : String;
        public  ecuNomBanco : String;
        public  ecuNombre : String;
        public  ecuContacto : String;
        public  ecuDireccion : String;
        public  entidadVO : EntidadVO;
        public  entClave : number;
        public  munClave : number;
        public  ecuCp : String;
        public  ecuTelefono : String;
        public  activosTransferVO: Set <ActivosTransferVO>;
        
        public constructor()
        {
            this.tipoTransferVO = new TipoTransferVO();
            this.entidadVO = new EntidadVO();
            //this.activosTransferVO = new ArrayCollection();
        }
        
        /**
         * Obtiene la representación String del objeto.
         */  
        public  toString() : String{
            return this.ecuId.toString(); 
        }
    }
