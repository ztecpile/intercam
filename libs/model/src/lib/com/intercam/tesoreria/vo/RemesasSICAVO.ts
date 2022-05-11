export class RemesasSICAVO {
    constructor(
		/**
		 * Numero serial cheaut
		 */
		public claveCheque?:number,
		
		/**
		 * Sucursal
		 */
		public claveSucursal?:String,
		
		/**
		 * Hora
		 */
		public hora?:String,
		
		/**
		 * fecha cheque
		 */
		public fechaCheque?:Date,
		
		
		/**
		 * fecha cheque
		 */
		public clavePromotor?:String,
		
		
		/**
		 * fon cheque
		 */
		public fonCheque?:String,
		
		/**
		 * clave divisa
		 */
		public claveDivisa?:String,
		
		/**
		 * Instrumento
		 */
		public instrumento?:String,
		
		/**
		 * Monto Cheque
		 */
		public montoCheque?:number,
		
		/**
		 * Numero Cheque
		 */
		public numeroCheque?:String,
		
		/**
		 * Cuenta Cheque
		 */
		
		public cuentaCheque?:String,
		
		/**
		 * ABA Cheque
		 */
		public abaCheque?:String,
		
		/**
		 * Banco Cheque
		 */
		
		public bancoCheque?:String,
		
		/**
		 * Ciudad
		 */
		public ciudad?:String,
		
		/**
		 * Girador
		 */
		public girador?:String,
		
		/**
		 * fecha girador
		 */
		public fechaGirador?:Date,
		
		/**
		 * Beneficiario Cheque
		 */
		public beneficiario?:String,
		
		/**
		 * clave cliente
		 */
		public claveCliente?: String,
		
		/**
		 * Observaciones captura
		 */
		public observaciones1?:String,
		
		/**
		 * Observaciones2 captura
		 */
		public observaciones2?:String,
		
		/**
		 * medio
		 */
		public medio?:String,
		
		/**
		 * verificador
		 */
		public verificador?:String,
		
		/**
		 * telefono
		 */
		public telefono?:String,
		
		/**
		 * Observaciones fondos 1
		 */
		public observacionesFondos1?:String,
		
		/**
		 * Observaciones fondos 2
		 */
		public observacionesFondos2?:String,
		
		/**
		 * Observaciones Autorizacion1
		 */
		public observacionesAutorizacion1?:String,
		
		/**
		 * Observaciones Autorizacion2
		 */
		public observacionesAutorizacion2?:String,
		
		/**
		 * Operacion
		 */
		public operacion?:number,
		
		/**
		 * tipo de cambio
		 */
		public tipoCambio?:number,
		
		/**
		 * status cheque
		 */
		public status?:number,
		
		/**
		 * auditoria
		 */
		public auditoria?:String,

		   
		/** 
       	* Fecha de vencimiento
       	* */

	    public fevencimiento?: Date,
				
		/**
		 * Monto Pesos
		 */
		public montoPesos?:number,

    ) {}
  }
  