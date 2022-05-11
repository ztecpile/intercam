import { TipoRelVO } from "./TipoRelVO";

    export class RelacionPersonaVO
    {
        public  relId : number;
        public  perIdDe : number;
        public  perId : number;
        public  usuUsuario : string;
        public  relNombreNotario : string;
        public  relNumeroNotario : string;
        public  relPlazaNotario : string;
        public  relNumeroActaCont : string;
        public  relRegPubPropiedad : string;
        public  perNomCorto : string;
        public  relFconstitucionStr : string;
        public  relFechaRPPStr : string;
        public  relFaltaStr : string;
        public  tipoRelacionVO : TipoRelVO;
        public  relConsecLegado : number;
        public  tacId : number;
        public  relPlazaRPP : string;
        public  relMontoMax : number;
        public  relLocNumero : string;
        
        /**
        * Email de las persona relacionadas
        * */
        public  pefEmail : string;
        /**
        *
        */
        public  relCargo : string;
        /**
         * Clave de la entidad de la ciudad RPC
         * */
        public  entClaveCiudad : number;

        /**
         * Descripcion de la localidad o municipio.
         */
        public  relLocalidadCiudad : string;

        /**
        * Constructor de la clase.
        */
        public  RelacionPersonaVO()
        {
            this.usuUsuario = null;
            this.relNombreNotario = null;
            this.relNumeroNotario = null;
            this.relPlazaNotario = null;
            this.relNumeroActaCont = null;
            this.relRegPubPropiedad = null;
            this.perNomCorto = null;
            this.tipoRelacionVO = new TipoRelVO();
            this.relFconstitucionStr = "";
            this.relFechaRPPStr = null;
            this.relFaltaStr = null;
            this.relMontoMax = 0;
            this.relLocNumero = null;
        }
		
		public  toString():string{
			return "" +this.tipoRelacionVO;
		}
    }
