import { PersonaVO } from "../../persona/vo/PersonaVO";
import { TelefonoVO } from "../../persona/vo/TelefonoVO";

    export class ContratoUsuarioVO
    {
       /**
        * Informacion de la persona
        */
        public  persona:PersonaVO;
       /**
        * Direcciones asociadas a la persona
        */
       //List<DireccionVO> direcciones
        public  direcciones: any []; //ArrayCollection;
       /**
        * Contratos de la persona
        */
       //private List<PersonaContratoVO> perContrato;
        public  perContrato: any [];//ArrayCollection;
       /**
        * Informacion del telefono
        */
        public  telefono:TelefonoVO;
        /**
        * Documento referente al comprobante de domicilio
        */
        public  docId:Number;
		
		/**
		 * Tipo de contrato 1 o 5 para divisas CB o Divisas banco respectivamente.
		 */
		public  tconId : Number;

        public constructor()
        {
        }

    }
