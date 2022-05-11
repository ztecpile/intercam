import { ContratoVO } from "./ContratoVO";
import { CuestionarioVO } from "./CuestionarioVO";
import { TipoCuestionarioVO } from "./TipoCuestionarioVO";

 
    export class ContratoCBVO extends ContratoVO
    {

         public   ccbTasaComisMc:number;
         public   ccbTasaComis:number;

         public   ccbOperaCc:boolean;
         public   ccbTraspasaTit:boolean;
         public   ccbOpeReporto:boolean;
         public   ccbRepAsmb:string;
         public   ccbRetieneIva:boolean;
         public   ccbRetieneIsr:boolean;
         public   ccbExeCobFin:string;
         public   ccbEnvCtaCobadm:boolean;

         public   ccbFenvCtaCobadmStr:string;
         public   ccbTasaIntDeu:number;

         public   ccbComisPol:number;
         public   ccbPapelEmite:string;
         public   cuestionario:TipoCuestionarioVO;
         public   cuestionarioVO:CuestionarioVO;
		 public   statusCuenta:string = '';
		 
         /**
         * Permiten realizar consultas de saldos, estos campos no estan
         * mapeados a la base de datos, ya que solo se calculan.
         * lmendoza 15/oct/2007
         */
         public  ccbSaldoMD : number
         public  ccbSaldoCapitales : number
         public  ccbSaldoSocInv : number
         public  ccbSaldoEfe : number
         public  nombreCliente:string;
         public  tmpClvCli : string;
         public  tmpClvSuc : string;
         public  conIdSica : number;
		 
         /**
          * Campo para distinguir cliente, contraparte y corporativo en contratos de derivados.
          */
         public  ccbTipoCliente : number;
		 
		 public  ccbAccertor : string;
         
         /**
         * Formador de Mercado.
         **/
        public  ccbForMercado : string;
		
		/**
		 * indica si el contrato tiene asesor de inversion
		 */
		public  tieneAsesorInversion:boolean;
		
		/**
		 * indica el perId del asesor de inversion del contrato
		 */
		public  perIdAsesor:number;
        
        /**
        * Estrategias
        */
        public  ccbEstrategias: boolean;
		
 		/**
        * Constructor de la clase.
        */
        public constructor()
        {
            super();
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
