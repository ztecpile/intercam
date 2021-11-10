import { TipoRelVO } from "./TipoRelVO";

    export class RelacionPersonaVO
    {
        public  relId : Number;
        public  perIdDe : Number;
        public  perId : Number;
        public  usuUsuario : String;
        public  relNombreNotario : String;
        public  relNumeroNotario : String;
        public  relPlazaNotario : String;
        public  relNumeroActaCont : String;
        public  relRegPubPropiedad : String;
        public  perNomCorto : String;
        public  relFconstitucionStr : String;
        public  relFechaRPPStr : String;
        public  relFaltaStr : String;
        public  tipoRelacionVO : TipoRelVO;
        public  relConsecLegado : Number;
        public  tacId : Number;
        public  relPlazaRPP : String;
        public  relMontoMax : Number;
        public  relLocNumero : String;
        
        /**
        * Email de las persona relacionadas
        * */
        public  pefEmail : String;
        /**
        *
        */
        public  relCargo : String;
        /**
         * Clave de la entidad de la ciudad RPC
         * */
        public  entClaveCiudad : Number;

        /**
         * Descripcion de la localidad o municipio.
         */
        public  relLocalidadCiudad : String;

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
		
		public  toString():String{
			return "" +this.tipoRelacionVO;
		}
    }
