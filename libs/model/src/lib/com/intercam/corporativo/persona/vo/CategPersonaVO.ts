import { PersonaVO } from "./PersonaVO";
import { SectorEconomicoVO } from "./SectorEconomicoVO";
import { TipoPersonaVO } from "./TipoPersonaVO";

    export class CategPersonaVO
    {
        public  cpeId : Number;
        public  cpeDescripcion : String;
        public  tmpCvelegSabi : String;
        public  tipoPersonaVO : TipoPersonaVO;
        public  personasVO : Set <PersonaVO>;
        public  tmpCvelegSica : String;
        public  tmpCvelegSiff : Number;
        public  cpeEsContraparte : Boolean;
        public  sectoresVO : Set <SectorEconomicoVO>;
		public  cpeRiesgo : Number;
        public  cpeRegSimpli: Boolean;
        /**
         * Constructor de la clase.
         */
        public  CategPersonaVO()
        {
            this.cpeDescripcion = '';
            this.tmpCvelegSabi = '';
            this.tmpCvelegSica = '';
            this.tipoPersonaVO = new TipoPersonaVO();
            this.personasVO = new Set ;
            this.sectoresVO = new Set;
            this.tmpCvelegSiff = 0;
            this.cpeEsContraparte = false;
			this.cpeRiesgo = 0;
        }
    }
