export class CuentaSpidVO{
    constructor(

        public csdUsuAdm?:string,
		public csdConsec?:string,
		public csdCLABE?:string,
		public csdBanco?:string,
		public insDescri?:string,
		public csdCliUsu?:string,
		public csdStatus?:string,
		public csdAlias?:string,
		public csdRFCBen?:string,
		public csdEmaBen?:string,
		public csdInicia?:string,
		public csdFecAlt?:Date,
		public csdFecCan?:Date,
		public csdDesAdi?:string,
		public csdDesCue?:string,
		public csdFeAlFo?:Date,
		
		/**
		 * Razon Social
		 */
		public csdRazonSocial?:string,
		
		/**
		 * Actividad Comercial
		 */
		public csdActComercial?:string,
		
		/**
		 * Tipo Relación
		 */
		public csdTipRelacion?:string,
		
		/**
		 * Motivo Pago
		 */
		public csdMotivPago?:string,  
		/**
		 * Referencia 1
		 */
		public csdReferencia1?:string,
		
		/**
		 * Referencia Otro
		 */
		public  csdReferenciaOtro?:string, 

        ){}
    }