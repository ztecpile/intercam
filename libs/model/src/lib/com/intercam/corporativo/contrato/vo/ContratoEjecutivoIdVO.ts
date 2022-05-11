import { PersonaVO } from "../../persona/vo/PersonaVO";
import { ContratoVO } from "./ContratoVO";

    export class ContratoEjecutivoIdVO
    {
        /**
         * Id del contrato.
         */
        public  conIdVO : ContratoVO

        /**
         * Id de la persona.
         */
        public  perIdVO : PersonaVO;

        /**
        * Constructor de la clase.
        */
        public constructor() {
            this.conIdVO = null;
            this.perIdVO = new PersonaVO();
        }

        /**
         * Obtiene la representación String del objeto.
         */  
        public  toString() : string {
            return this.perIdVO.perId + ',' + this.conIdVO.conId;
        }
    }
