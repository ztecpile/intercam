import { ConCanalComercialVO } from "./ConCanalComercialVO";

	export class ContratoLuminaVO 
	{
		/**
		 * Custodia Administrativa
		 */
		public  cluCustodiaAdmin : string;
		/**
		 * Categoria de ISR
		 */
		public  cluCategoriaIsr : string;
		/**
		 * Motivo de la exencion
		 */
		public  cluMotivoIsr : string;
		/**
		 * Clave Banxico
		 */
		public  cluCveBanxico : string;
		/**
		 * Cuenta Propia
		 */
		public  cluCuentaPropia : string;
		/**
		 * Ordenes de Arbitraje
		 */
		public  cluOrdArbitraje : string;
		/**
		 * Ventas en Corto
		 */
		public  cluVentasCorto : string;
		/**
		 * Cruces Propios
		 */
		public  cluCrucesPropios : string;
		/**
		 * Fondos de Recompra
		 */
		public  cluFondosRecompra : string;
		/**
		 * Fecha de Revision
		 */
		public  cluFechaRevisionStr : string;
		/**
		 * Comision por Operaciones
		 */
		public  cluComisionOper : number;
		/**
		 * Comision por Custodia
		 */
		public  cluComisionCustodia : number;
		
		/**
		 * Lista de Canales Comerciales
		 * */
		//List<ConCanalComercialVO> listaCanales = new ArrayList<ConCanalComercialVO>();
		public  listaCanales : ConCanalComercialVO[];
		
		public constructor()
		{
			
			//this.listaCanales = new ArrayCollection();
			this.cluCustodiaAdmin = '1';
			this.cluCveBanxico = '0';
			this.cluCuentaPropia = '0';
			this.cluOrdArbitraje = '0';
			this.cluVentasCorto = '0';
			this.cluCrucesPropios = '0';
			this.cluFondosRecompra = '0';
			this.cluComisionOper = 1.0;
			this.cluComisionCustodia = 0.0;
			this.cluCategoriaIsr = "02";
			this.cluFechaRevisionStr = "";
		}
	}
