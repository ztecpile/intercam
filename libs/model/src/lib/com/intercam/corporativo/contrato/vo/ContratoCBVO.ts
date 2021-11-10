import { CuestionarioVO } from "./CuestionarioVO";
import { TipoCuestionarioVO } from "./TipoCuestionarioVO";

 
    export class ContratoCBVO 
    {

         public   ccbTasaComisMc:Number;
         public   ccbTasaComis:Number;

         public   ccbOperaCc:Boolean;
         public   ccbTraspasaTit:Boolean;
         public   ccbOpeReporto:Boolean;
         public   ccbRepAsmb:String;
         public   ccbRetieneIva:Boolean;
         public   ccbRetieneIsr:Boolean;
         public   ccbExeCobFin:String;
         public   ccbEnvCtaCobadm:Boolean;

         public   ccbFenvCtaCobadmStr:String;
         public   ccbTasaIntDeu:Number;

         public   ccbComisPol:Number;
         public   ccbPapelEmite:String;
         public   cuestionario:TipoCuestionarioVO;
         public   cuestionarioVO:CuestionarioVO;
		 public   statusCuenta:String = '';
		 
         /**
         * Permiten realizar consultas de saldos, estos campos no estan
         * mapeados a la base de datos, ya que solo se calculan.
         * lmendoza 15/oct/2007
         */
         public  ccbSaldoMD : Number
         public  ccbSaldoCapitales : Number
         public  ccbSaldoSocInv : Number
         public  ccbSaldoEfe : Number
         public  nombreCliente:String;
         public  tmpClvCli : String;
         public  tmpClvSuc : String;
         public  conIdSica : Number;
		 
         /**
          * Campo para distinguir cliente, contraparte y corporativo en contratos de derivados.
          */
         public  ccbTipoCliente : Number;
		 
		 public  ccbAccertor : String;
         
         /**
         * Formador de Mercado.
         **/
        public  ccbForMercado : String;
		
		/**
		 * indica si el contrato tiene asesor de inversion
		 */
		public  tieneAsesorInversion:Boolean;
		
		/**
		 * indica el perId del asesor de inversion del contrato
		 */
		public  perIdAsesor:Number;
        
        /**
        * Estrategias
        */
        public  ccbEstrategias: Boolean;
		
 		/**
        * Constructor de la clase.
        */
        public constructor()
        {
           
            this.cuestionario = new TipoCuestionarioVO();
            this.cuestionarioVO = new CuestionarioVO();
            this.ccbTasaComis = 0;
            this.ccbTasaComisMc = 0;
            this.ccbTasaIntDeu = 0;
            this.ccbComisPol = 0;
			this.ccbRetieneIsr = true;
			this.ccbRetieneIva = true;
			this.ccbAccertor = "F";
            this.ccbEstrategias = false;
        }
    }
