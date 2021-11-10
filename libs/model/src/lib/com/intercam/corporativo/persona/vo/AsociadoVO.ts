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
        public  asoFestatusStr : String ;
        public  asoEstatus : String;
        public  asoCertificadoCb : Boolean;
        public  asoCertificadoFondos : Boolean;
    
        // SABI
        public  asoCveCnbv : String ;
        public  asoNumNot : number;
        public  asoNomNot : String;
        public  asoNumEsc : String ;
        public  asoFecEscStr : String;
        public  asoPlazaEsc : String;
        public  asoPromCer : number;
		
		/**
		 * Sentra ID
		 */
		public  asoSentraId : String;
		/**
		 * Limite de compra
		 */
		public  asoLimiteCompra : Number;
		/**
		 * Limite de venta
		 */
		public  asoLimiteVenta : Number;
		/**
		 * Perfil de operador
		 */
		public  asoPerfilOperador : String;
        
    }
