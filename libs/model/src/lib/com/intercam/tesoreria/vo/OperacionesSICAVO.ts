export class OperacionesSICAVO {
  constructor(
    /**
     * numero de operación
     */
    public operacion?: number,

    /**
     * hora de operacion
     */
    public hora?: string,

    /**
     * fecha captura
     */
    public fechaCaptura?: Date,

    /**
     * fecha valor
     */
    public fechaValor?: Date,

    /**
     * Identificador de dia
     * 0-Mismo dia, 1-24hrs, 2-48hrs
     */
    public diaValor?: number,

    /**
     * tipo operacion
     * C-Compra, V-Venta
     */
    public tipo?: string,

    /**
     * clave divisa
     */
    public cveDivisa?: string,

    /**
     * monto de la divisa
     */
    public montoDivisa?: number,

    /**
     * tipo de cambio
     */
    public tipoCambio?: number,

    /**
     * comision
     */
    public comision?: number,

    /**
     * Instrumento
     */
    public instrumento?: string,

    /**
     * tipo liquidacion
     */
    public liquidacion?: string,

    /**
     * clave del banco de pesos
     */
    public bancoPesos?: string,

    /**
     * clave del banco de divisa
     */
    public bancoDivisa?: string,

    /**
     * clave del cliente
     */
    public cveCliente?: string,

    /**
     * clave del promotor
     */
    public cvePromotor?: string,

    /**
     * sucursal
     */
    public sucursal?: string,

    /**
     * Descripcion sucursal
     */
    public descSucursal?: string,

    /**
     * observaciones
     */
    public observaciones?: string,

    /**
     * numero de deal cuando es un canje
     */
    public referenciaCanje?: number,

    /**
     * estatus de la operacion
     * 0-Alta rapida
     * 1-captura
     * 2-Autorizado
     * 3-cancelado
     * 4-Autorizado para liquidar
     * 5-liquidado
     */
    public estatus?: number,

    /**
     * autoria de la operacion
     */
    public auditoria?: string,

    /**
     * medio origen de captura
     * P-Pos
     * S-Sica
     */
    public medio?: string,

    /**
     * Sucursal origen del promotor
     */
    public origen?: string,

    /**
     * grupo al que pertenece el promotor
     */
    public grupo?: string,

    /**
     * grupo 2 al que pertenece el promotor
     */
    public grupo2?: string,

    /**
     * monto en pesos
     */
    public montoPesos?: number,

    /**
     * nombre del titular
     */
    public titular?: string,

    /**
     * utilidad
     */
    public utilidad?: number,

    /**
     * pago x anticipado
     */
    public pxa?: string,

    /**
     * clave instrumento
     */
    public cveInstrumento?: string,

    /**
     * clave liquidacion
     */
    public cveLiquidacion?: string,

    /**
     * promotor
     */
    public promotor?: string,

    /**
     * Identificacion
     */
    public identificacion?: string,

    /**
     * rfc
     */
    public rfc?: string,

    /**
     * domicilio
     */
    public domicilio?: string,

    /**
     * acta
     */
    public acta?: string,

    /**
     * Top Ten
     */
    public topTen?: string,

    /**
     * Riesgo
     */
    public riesgo?: string,

    /**
     * Extension
     */
    public extension?: string,

    /**
     * Linea de credito
     */
    public lineaCredito?: number,

    /**
     * Tipo de Costo.
     */
    public tipoCosto?: number,

    /**
     * Observaciones Autorizacion
     */

    public observacionAutoriza?: string,

    /**
     * validacion PXA
     */
    public validaPXA?: string,

    /**
     * Es el consecutivo de pago cuando se trata de mixtos.
     * 0 cuando NO es mixto.
     */
    public consecutivo?: number,

    /**
     * Clave legada en SICA para el banco por el cual se liquida.
     */
    public claveBanco?: string,

    /**
     * Medio en el cual se marcara de liquidada la operacion.
     */
    public medId?: number,

    /**
     * Contrato.
     */
    public contrato?: number,

    /**
     * Referencia.
     */
    public referencia?: string,

    /**
     * Hora auto
     */
    public horauto?: string,

    /**
     * Estatus auto
     */
    public edoaut?: number,

    /**
     * Clave Mesa
     */
    public mesa?: number,

    /**
     * Nombre Cliente
     */
    public empcli?: string,

    /**
     * Observaciones 1 obseoper
     */
    public co1Obs?: string,

    /**
     * Observaciones 2 obseoper
     */
    public co2Obs?: string,

    /**
     * Observaciones 3 obseoper
     */
    public co3Obs?: string,

    /**
     * Tipo de Cambio para Marcaje Interbancario
     */
    public tipoCambioInter?: number
  ) {}
}
