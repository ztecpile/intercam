export class CuentaSpeiVO{
    constructor(
        		/**
		 * numero de cliente
		 */
		public numcliente?:string,
		/**
		 * Consecutivo para cuentas relacionadas
		 */
		public consecutivo?:string,
		/**
		 * Cuenta de otro banco para envio de SPEI
		 */
		public cuenta?:string,
		/**
		 * banco destino del SPEI
		 */
		public banco?:string,
		/**
		 * sucursal del banco destino del SPEI
		 */
		public sucursal?:string,
		/**
		 * plaza de la sucursal del banco destino del SPEI
		 */
		public plaza?:string,
		/**
		 * Nombre del beneficiario del SPEI
		 */
		public beneficiario?:string,
		/**
		 * estado de la ciudad de la sucursal del banco destino del SPEI
		 */
		public estado?:string,
		/**
		 * ciudad de la sucursal del banco destino del SPEI
		 */
		public ciudad?:string,
		/**
		 * Inicia S,N
		 */
		public inicia?:string,
		/**
		 * Status de la cuenta
		 * A Agregada
		 * I  Inactiva                                                                                                                                                                                                                 
		 */
		public status?:string,
		/**
		 * tipo de consulta
		 */
		public tipoConsulta?:string,
		/**
		 * noombre del banco
		 */
		public descripcionBanco?:string,
		/**
		 * usuario administrador NB
		 */
		public usuAdmNB?:string,

    ){ }
}