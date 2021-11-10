import { BiometricosPersonaVO } from "./BiometricosPersonaVO";

export class TransaccionFimpeVO {

	/**
	 * Id de la transaccion con FIMPE
	 */
	public trfId: Number;

	/**
	 * Id persona del Operador o Enrolador
	 */
	public perIdEnrolador: Number;

	/**
	 * Id persona del Cliente
	 */
	public perId: Number;

	/**
	 * Prioridad de la transaccion
	 */
	public trfPrioridad: Number;

	/**
	 * Estacion donde se realizo la transaccion
	 */
	public trfEstacion: Number;

	/**
	 * Bandera si viene o no la foto, para el reconocimiento facial
	 */
	public trfConFoto: String;

	/**
	 * Tipo transaccion fimpe
	 */
	public trfTipo: Number;

	/**
	 * Score transaccion
	 */
	public trfScore: Number;

	/**
	 * Resumen de observaciones
	 */
	public trfWatchList: String;

	/**
	 * Codigo de proceso fimpe
	 */
	public trfCodigo: String;

	/**
	 * Mensaje del proceso fimpe
	 */
	public trfMensaje: String;

	/**
	 * Resultado del proceso fimpe
	 */
	public trfResultado: String;

	/**
	 * IUB de la persona enrolada
	 */
	public trfIUB: String;

	/**
	 * List Biometricos
	 */
	public listBioPersona:  BiometricosPersonaVO[];

	/**
	 * Estado actual transaccion
	 */
	public lastTrfCodigo: String;

	/**
	 * Mensaje actual transaccion
	 */
	public lastTrfMensaje: String;

	/**
	 * ID actual transaccion
	 */
	public lastTrfId: Number;

	/**
	 * Resumen de observaciones
	 */
	public lastWatchList: String;

	public valEstatusIne: String;
	public valNombre: String;
	public valAPaterno: String;
	public valAMaterno: String;
	public valMinucia2: String;
	public valMinucia7: String;

	/**
	 * Coincide nombre INE
	 */
	public trfNombre: String;

	/**
	 * Coincide aPaterno INE
	 */
	public trfApePaterno: String;

	/**
	 * Coincide aMaterno INE
	 */
	public trfApeMaterno: String;

	/**
	 * % coincide biometria 2
	 */
	public trfSimili2: String;

	/**
	 * % coincide biometria 7
	 */
	public trfSimili7: String;

	public trfSitINE: String;

	public trfChecaINE: String;

	public TransaccionFimpeVO() {
		this.trfId = null;
		this.perIdEnrolador = null;
		this.perId = null;
		this.trfPrioridad = null;
		this.trfEstacion = null;
		this.trfConFoto = null;
		this.trfTipo = null;
		this.trfScore = null;
		this.trfIUB = '0';
		this.trfWatchList = null;
		this.trfCodigo = null;
		this.trfMensaje = null;
		this.trfResultado = 'F';
	}

	public toString(): String {
		return "[" + this.perId.toString() + "," + this.trfPrioridad.toString() + "]";
	}
}
