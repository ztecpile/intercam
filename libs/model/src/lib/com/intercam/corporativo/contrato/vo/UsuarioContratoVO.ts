import { DireccionVO } from "../../persona/vo/DireccionVO";
import { PersonaVO } from "../../persona/vo/PersonaVO";
import { ContratoEjecutivoVO } from "./ContratoEjecutivoVO";
import { ContratoVO } from "./ContratoVO";
import { PerfilVO } from "./PerfilVO";

    export class UsuarioContratoVO
    {
        public constructor()
        {
        }
        
        /**
         * Titular.
         */
        public  titular : PersonaVO;
        
        /**
         * Perfil de la persona con el contrato (No siempre es el titular).
         */
        public  perfil : PerfilVO;
        
        /**
         * Contrato.
         */
        public  contrato : ContratoVO;
        
        /**
         * Direccion del contrato.
         */
        public  direccionContrato : DireccionVO;
        
        
        /**
         * Nombre del promotor titular del contrato.
         */
        public  promotor : ContratoEjecutivoVO;
    }
