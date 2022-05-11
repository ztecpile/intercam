export class Stat7VO {
  constructor(
    /**
     * Identificador de la entidad
     */
    public staId?: number,

    /**
     * Identificador de archivo al que pertenece la entidad
     */
    public cargaId?: number,

    /**
     * Fecha y hora de creación de la entidad
     */
    public fechaRegistro?: Date,

    /**
     * Fecha de liquidaci&oacute,n de la operaci&oacute,n
     */
    public fechaLiquidacion?: Date,

    /**
     * Adquiriente
     */
    public adquiriente?: string,

    /**
     * Número de cuenta
     */
    public numeroCuenta?: string,

    /**
     * Cuenta origen
     */
    public cuentaOrigen?: string,

    /**
     * Cuenta destino
     */
    public cuentaDestino?: string,

    /**
     * Descripción
     */
    public descripcion?: string,

    /**
     * Respuesta
     */
    public respuesta?: string,

    /**
     * CR
     */
    public codigoRespuesta?: string,

    /**
     * Secuencia
     */
    public secuencia?: string,

    /**
     * Cajero
     */
    public cajero?: string,

    /**
     * Fecha de la operación
     */
    public fecha?: Date,

    /**
     * Hora de la operación
     */
    public hora?: string,

    /**
     * Orden
     */
    public orden?: string,

    /**
     * Red
     */
    public red?: string,

    /**
     * Monto
     */
    public monto?: number,

    /**
     * Monto en dólares
     */
    public dolares?: number,

    /**
     * Número de autorización
     */
    public numeroAutorizacion?: string,

    /**
     * Código de país
     */
    public codigoPais?: string,

    /**
     * Monto origen
     */
    public montoOrigen?: number,

    /**
     * Código moneda
     */
    public codigoMoneda?: string,

    /**
     * Surcharge
     */
    public surcharge?: number,

    /**
     * Donativo
     */
    public donativo?: number,

    /**
     * Empresa
     */
    public empresa?: string,

    /**
     * Compañía
     */
    public compania?: string,

    /**
     * ComLoyality Fee
     */
    public comisionLoyalityFee?: number,

    /**
     * Comisión uso línea
     */
    public comisionUsoLinea?: number,

    /**
     * POS entry mode
     */
    public posEntryMode?: string,

    /**
     * Indicador de código de servicio
     */
    public flagServiceCode?: string,

    /**
     * Terminal Entry Cap
     */
    public terminalEntryCap?: string,

    /**
     * ARQC
     */
    public arqc?: string,

    /**
     * ARPC
     */
    public arpc?: string,

    /**
     * ARQC verify
     */
    public arqcVerify?: string,

    /**
     * DF name
     */
    public dfName?: string
  ) {}
}
