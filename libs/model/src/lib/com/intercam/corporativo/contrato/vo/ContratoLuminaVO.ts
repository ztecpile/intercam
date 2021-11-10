import { ConCanalComercialVO } from "./ConCanalComercialVO";

	export class ContratoLuminaVO 
	{
		/**
		 * Custodia Administrativa
		 */
		public  cluCustodiaAdmin : String;
		/**
		 * Categoria de ISR
		 */
		public  cluCategoriaIsr : String;
		/**
		 * Motivo de la exencion
		 */
		public  cluMotivoIsr : String;
		/**
		 * Clave Banxico
		 */
		public  cluCveBanxico : String;
		/**
		 * Cuenta Propia
		 */
		public  cluCuentaPropia : String;
		/**
		 * Ordenes de Arbitraje
		 */
		public  cluOrdArbitraje : String;
		/**
		 * Ventas en Corto
		 */
		public  cluVentasCorto : String;
		/**
		 * Cruces Propios
		 */
		public  cluCrucesPropios : String;
		/**
		 * Fondos de Recompra
		 */
		public  cluFondosRecompra : String;
		/**
		 * Fecha de Revision
		 */
		public  cluFechaRevisionStr : String;
		/**
		 * Comision por Operaciones
		 */
		public  cluComisionOper : Number;
		/**
		 * Comision por Custodia
		 */
		public  cluComisionCustodia : Number;
		
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
