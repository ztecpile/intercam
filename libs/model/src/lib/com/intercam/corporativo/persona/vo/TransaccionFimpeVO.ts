import { BiometricosPersonaVO } from "./BiometricosPersonaVO";

export class TransaccionFimpeVO {

	/**
	 * Id de la transaccion con FIMPE
	 */
	public trfId: number;

	/**
	 * Id persona del Operador o Enrolador
	 */
	public perIdEnrolador: number;

	/**
	 * Id persona del Cliente
	 */
	public perId: number;

	/**
	 * Prioridad de la transaccion
	 */
	public trfPrioridad: number;

	/**
	 * Estacion donde se realizo la transaccion
	 */
	public trfEstacion: number;

	/**
	 * Bandera si viene o no la foto, para el reconocimiento facial
	 */
	public trfConFoto: string;

	/**
	 * Tipo transaccion fimpe
	 */
	public trfTipo: number;

	/**
	 * Score transaccion
	 */
	public trfScore: number;

	/**
	 * Resumen de observaciones
	 */
	public trfWatchList: string;

	/**
	 * Codigo de proceso fimpe
	 */
	public trfCodigo: string;

	/**
	 * Mensaje del proceso fimpe
	 */
	public trfMensaje: string;

	/**
	 * Resultado del proceso fimpe
	 */
	public trfResultado: string;

	/**
	 * IUB de la persona enrolada
	 */
	public trfIUB: string;

	/**
	 * List Biometricos
	 */
	public listBioPersona:  BiometricosPersonaVO[];

	/**
	 * Estado actual transaccion
	 */
	public lastTrfCodigo: string;

	/**
	 * Mensaje actual transaccion
	 */
	public lastTrfMensaje: string;

	/**
	 * ID actual transaccion
	 */
	public lastTrfId: number;

	/**
	 * Resumen de observaciones
	 */
	public lastWatchList: string;

	public valEstatusIne: string;
	public valNombre: string;
	public valAPaterno: string;
	public valAMaterno: string;
	public valMinucia2: string;
	public valMinucia7: string;

	/**
	 * Coincide nombre INE
	 */
	public trfNombre: string;

	/**
	 * Coincide aPaterno INE
	 */
	public trfApePaterno: string;

	/**
	 * Coincide aMaterno INE
	 */
	public trfApeMaterno: string;

	/**
	 * % coincide biometria 2
	 */
	public trfSimili2: string;

	/**
	 * % coincide biometria 7
	 */
	public trfSimili7: string;

	public trfSitINE: string;

	public trfChecaINE: string;

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

	public toString(): string {
		return "[" + this.perId.toString() + "," + this.trfPrioridad.toString() + "]";
	}
}
