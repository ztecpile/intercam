import { BolsaVO } from "../../contrato/vo/BolsaVO";
import { PersonaVO } from "./PersonaVO";

    export class PersonaMoralVO extends PersonaVO 
    {
        //public  perId : Number;
        public  pemRazonSocial : string;
        public  pemEsDeIntercam : Boolean;
        public  pemFconstitucionStr : String;
        public  pemNoActaConst : String;
        public  pemRegPubPropie : String;
        public  pemNombreNotario : String;
        public  pemNoNotario : String;
        public  pemPlazaNotaria : String;
        public  pemEsCorporativo : Boolean;
        public  pemCtaBanxico : String;
        public  pemTomoRpp : Number;
        public  pemFolioRpp : String;
        public  pemLibroRpp : Number;
        public  pemFechaRppStr : String;
        public  pemIdShcp : String;
        public  contratos : any; //Set <PopUpInformativoABCPersonaMoralVO>;
        public  pemFechaActaStr : String;
        public  contraparteVO :any; // ContraparteVO;
        public  munClave : Number;
        public  pemDocExtEst : String;
        public  pemTipoSoc : String;
        public  pemLocNumeroPlaza : String;
        public  pemLocNumeroCiudadRpc : String;
        /**
         * Clave de la entidad de la plaza
         */
        public  entClavePlaza : Number;
        /**
         * Clave de la entidad de la ciudad RPC
         */
        public  entClaveCiudad : Number;
        /**
         * Descripci&oacute;n de la localidad de la plaza.
         */
        public  pemLocalidadPlaza : String;
        /**
         * Descripci&oacute;n de la clave de la entidad de la ciudad RPC.
         */
        public  pemLocalidadCiudad : String;

        /**
         * Cotiza en bolsa
         */
        public  pemCotBolsa : Boolean;
        
        /**
         * Id bolsa
         */
        public  bolsaVO : BolsaVO ;
        
        /**
         * Regimen Simplificado
         */
        public  pemRegSimpl : Boolean;
        
        /**
         * clave pizarra
         */
        public  pemClvPizarra : String;
        
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
		public  _perTaxId : String;

		public  setPemIdShcp (taxId : String) : void {
            this._perTaxId = taxId;
        }
        /**
         * Obtiene el taxId.
         */
        public  getPemIdShcp () : String {
            return this._perTaxId;
        }
        
    }
