
 export  class PaisVO 
    {
         public paiClave:number;
         public paiDescripcion : string;
         public paiEstatus : boolean;
         public tmpOldSica : number;
         public tmpOldCb : string;
         public tmpOldNacCb : string;
         public tmpOldSiif : number;
         public tmpOldNacSiif : number;
		
		
        //campos para manejo de de caratulas de transfer lmendoza
         public paiIntCode : string;
         public paiUsaIban : boolean;
         public paiReqBanco : boolean;
         public paiReqSucursal : boolean;
         public paiLonIban : number;
         public paiUsaSwift : boolean;
         public paiLonBanco : number;
         public paiOperaTransfer : boolean;
         public paiLonCuenta : number;
         public ibanField: any = new Array();
        //  public ibanField: IbanFieldVO [];

		 /**
         * Descripcion de la Nacionalidad
         * */
        public  paiNacionalidad : string;

        /**
         * Identificador para sibamex SOPAIS
         */
        public  tmpOldSoPaisId : string;

        /**
         * Identificador para sibamex CLPAISES
         */
        public  tmpOldClPaisesId : string;

		/**
         * lada internacional del pais
         */
        public  paiLada : string;
        
        /**
        * tasaISRDerivado
        **/
        public  paiTasaISRDerivado : string;
        
        /**
        * Id Broxel
        **/
        public  broxelId : number;
        
		/**
		 * Pais residencia fiscal
		 **/
		public  paiFiscal : boolean;
		/**
		 * Pais residencia fiscal solicita beneficio
		 **/
		public  paiFiscalBeneficio : boolean;
		
		/**
		 * Clave del pais fiscal
		 */
		public  paiClaveFiscal : number;
		
		/**
		 * Pais riesgo
		 */
		public  paiRiesgo : number;
		
		/**
		 * Autorizacion Cumplimineto
		 */
		public  paiAutoCumplimiento : boolean;
        /**
         * Constructor de la clase.
         */
        constructor()
        {
            this.paiDescripcion = '';
            this.paiEstatus = true;
            this.tmpOldCb = '';
            this.tmpOldSica = 0;
            this.tmpOldNacCb = '';
            this.tmpOldSiif = 0;
            this.tmpOldNacSiif =0;
			this.paiLada = '';
        }
          /**
         * Crea una copia independiente del objeto this.
         * @return un objeto PaisVO
         */
//         public clone():PaisVO{
//             var paisVO:PaisVO = new PaisVO();

//             paisVO.paiClave = this.paiClave;
//             paisVO.paiDescripcion = this.paiDescripcion;
//             paisVO.paiEstatus = this.paiEstatus
//             paisVO.tmpOldSica = this.tmpOldSica;
//             paisVO.tmpOldCb = this.tmpOldCb;
//             paisVO.tmpOldNacCb = this.tmpOldNacCb;
//             paisVO.tmpOldSiif = this.tmpOldSiif;
//             paisVO.tmpOldNacSiif = this.tmpOldNacSiif;
//             paisVO.paiIntCode = this.paiIntCode;
//             paisVO.paiUsaIban = this.paiUsaIban
//             paisVO.paiReqBanco = this.paiReqBanco
//             paisVO.paiReqSucursal = this.paiReqSucursal
//             paisVO.paiLonIban = this.paiLonIban;
//             paisVO.paiUsaSwift = this.paiUsaSwift;
//             paisVO.paiLonBanco = this.paiLonBanco;
//             paisVO.paiOperaTransfer = this.paiOperaTransfer;
//             paisVO.paiLonCuenta = this.paiLonCuenta;
//             paisVO.paiNacionalidad = this.paiNacionalidad;
//             paisVO.tmpOldSoPaisId = this.tmpOldSoPaisId;
//             paisVO.tmpOldClPaisesId = this.tmpOldClPaisesId;
// 			paisVO.paiLada		= this.paiLada;
// 			paisVO.paiRiesgo = this.paiRiesgo;
// 			paisVO.paiAutoCumplimiento = this.paiAutoCumplimiento;
// //apartir de var validar

//             var ibanFieldsVO:ArrayCollection = new ArrayCollection();
//             for each(var ibanFieldVO:IbanFieldVO in this.ibanField){
//                 ibanFieldsVO.addItem(ibanFieldVO.clone());
//             }
//             paisVO.ibanField = ibanFieldsVO;

//             return paisVO;
//         }
        
        /**
         * Metodo que devuelve el texto "Bloqueado", si el pais no opera transferencias
         * @return string, Cadena vacía o con el texto "Bloqueado"
         **/
        public  get paiTxtOperaTransfer() : string {
            var txtOperaTransfer : string = "";
            if (!this.paiOperaTransfer) {
                txtOperaTransfer = 'Bloqueado';
            }
            return txtOperaTransfer
        }
        
        public  get paiClaveResidencia() : number {
            return this.paiClave;
        }
		
		public  toString():string{
			return this.paiNacionalidad;
		}
       

    }