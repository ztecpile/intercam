import { CanalVO } from "./CanalVO";
import { PersonaFisicaVO } from "./PersonaFisicaVO";

    export class AsociadoVO extends PersonaFisicaVO
    {
        
        /**
	     * Constructor por defecto.
	     */
        public  AsociadoVO()
        {
        }
        
        public  canalVO : CanalVO;
        public   perIdCompania : number;
        public  cveubi : number;
        public  asoFestatusStr : string ;
        public  asoEstatus : string;
        public  asoCertificadoCb : Boolean;
        public  asoCertificadoFondos : Boolean;
    
        // SABI
        public  asoCveCnbv : string ;
        public  asoNumNot : number;
        public  asoNomNot : string;
        public  asoNumEsc : string ;
        public  asoFecEscStr : string;
        public  asoPlazaEsc : string;
        public  asoPromCer : number;
		
		/**
		 * Sentra ID
		 */
		public  asoSentraId : string;
		/**
		 * Limite de compra
		 */
		public  asoLimiteCompra : number;
		/**
		 * Limite de venta
		 */
		public  asoLimiteVenta : number;
		/**
		 * Perfil de operador
		 */
		public  asoPerfilOperador : string;
        
    }
