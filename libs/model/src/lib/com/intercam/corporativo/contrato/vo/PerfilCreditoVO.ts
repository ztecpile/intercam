import { CategPersonaVO } from "../../persona/vo/CategPersonaVO";
import { PersonaVO } from "../../persona/vo/PersonaVO";
import { ContratoPersonaVO } from "./ContratoPersonaVO";
import { CuestionarioVO } from "./CuestionarioVO";
import { TipoCuestionarioVO } from "./TipoCuestionarioVO";

    export class PerfilCreditoVO {

        /**
         * Titular del contrato.
         */
        public  personaVO : PersonaVO;

        /**
         * Categoria a la que pertenece la persona.
         */
        public  categPersonaVO : CategPersonaVO;

        /**
         * Contrato.
         */
        public  contratoPersonaVO : ContratoPersonaVO;

        /**
         * Cuestionario(s) del contrato, en caso de existir.
         * Utilizado para la creacion dinamica del cuestionario.
         */
        public  tiposCuestionarioVO : TipoCuestionarioVO;

        /**
         * Cuestionario con las respuestas.
         * Utilizado para guardar el cuestionario.
         */
        public  cuestionarioVO : CuestionarioVO;

        /**
         * Personas relacionadas al contrato. El id es la descripcion del perfil. De RepetitivaPersonaVO se utiliza
         * principalmente personaVO, relacionPersonaVO y contratoPersonaVO.
         */
        public  relacionPersonas : Object;

        /**
         * Id de la persona.
         */
        public  perId : number;

        /**
         * Id del contrato.
         */
        public  conId : number;

        /**
         * Constructor.
         */
        public constructor()
        {
        }

        /**
         * Usado para los filtros.
         * Estatus.
         */
        public  get cesDesCorta () : string {
            return this.contratoPersonaVO.idVO.contratoVO.contratoEstatusVO.cesDesCorta;
        }

        /**
         * Usado para los filtros.
         * tconId.
         */
        public  get tconDescripcion () : string {
            return this.contratoPersonaVO.idVO.contratoVO.tipoContratoVO.tconDescripcion;
        }
    }

