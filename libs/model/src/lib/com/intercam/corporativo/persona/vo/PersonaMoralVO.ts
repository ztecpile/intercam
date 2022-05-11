import { BolsaVO } from "../../contrato/vo/BolsaVO";
import { PersonaVO } from "./PersonaVO";

    export class PersonaMoralVO extends PersonaVO 
    {
        //public  perId : number;
        public  pemRazonSocial : string;
        public  pemEsDeIntercam : boolean;
        public  pemFconstitucionStr : string;
        public  pemNoActaConst : string;
        public  pemRegPubPropie : string;
        public  pemNombreNotario : string;
        public  pemNoNotario : string;
        public  pemPlazaNotaria : string;
        public  pemEsCorporativo : boolean;
        public  pemCtaBanxico : string;
        public  pemTomoRpp : number;
        public  pemFolioRpp : string;
        public  pemLibroRpp : number;
        public  pemFechaRppStr : string;
        public  pemIdShcp : string;
        public  contratos : any; //Set <PopUpInformativoABCPersonaMoralVO>;
        public  pemFechaActaStr : string;
        public  contraparteVO :any; // ContraparteVO;
        public  munClave : number;
        public  pemDocExtEst : string;
        public  pemTipoSoc : string;
        public  pemLocNumeroPlaza : string;
        public  pemLocNumeroCiudadRpc : string;
        /**
         * Clave de la entidad de la plaza
         */
        public  entClavePlaza : number;
        /**
         * Clave de la entidad de la ciudad RPC
         */
        public  entClaveCiudad : number;
        /**
         * Descripci&oacute;n de la localidad de la plaza.
         */
        public  pemLocalidadPlaza : string;
        /**
         * Descripci&oacute;n de la clave de la entidad de la ciudad RPC.
         */
        public  pemLocalidadCiudad : string;

        /**
         * Cotiza en bolsa
         */
        public  pemCotBolsa : boolean;
        
        /**
         * Id bolsa
         */
        public  bolsaVO : BolsaVO ;
        
        /**
         * Regimen Simplificado
         */
        public  pemRegSimpl : boolean;
        
        /**
         * clave pizarra
         */
        public  pemClvPizarra : string;
        
        /**
         * Constructor de la clase.
         */
        public constructor() {
            super();
            this.pemFechaActaStr = '';
            this.pemRazonSocial = '';
            this.pemFconstitucionStr = '';
            this.pemFechaRppStr = '';
            this.pemEsDeIntercam = false;
            this.munClave = 0;
        }
        
        /**
         * @see com.intercam.corporativo.persona.vo.PersonaVO#getPerNomCompleto()
         */
         public  getPerNomCompleto() : string{
            return this.pemRazonSocial;
        }
        /**
         * Asigna el tax id de PM.
         * Este campo fue eliminado de i00persona_moral y renombrado en i00persona.
         */
		/**
		 * Id de taxes para las personas extranjeras.
		 */
		public  _perTaxId : string;

		public  setPemIdShcp (taxId : string) : void {
            this._perTaxId = taxId;
        }
        /**
         * Obtiene el taxId.
         */
        public  getPemIdShcp () : string {
            return this._perTaxId;
        }
        
    }
