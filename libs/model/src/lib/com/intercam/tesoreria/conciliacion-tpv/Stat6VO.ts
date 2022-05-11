export class Stat6VO {
  constructor(
    /**
     * Identificador de la entidad
     */
    public st6Id?: number,

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
     * Emisor
     */
    public emisor?: string,

    /**
     * Cajero
     */
    public cajero?: string,

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
     * Fecha de operación
     */
    public fecha?: Date,

    /**
     * Hora de operación
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
     * Autorización
     */
    public autorizacion?: string,

    /**
     * Compañía
     */
    public compania?: string,

    /**
     * ComLoyalityFee
     */
    public comisionLoyalityFee?: number,

    /**
     * Comisión uso línea
     */
    public comisionUsoLinea?: number,

    /**
     * Entry mode
     */
    public entryMode?: string,

    /**
     * Indicador de código de servicio
     */
    public fServiceCode?: string,

    /**
     * Capacidades de la terminal
     */
    public terminalCapacity?: string,

    /**
     * ARQA
     */
    public arqc?: string,

    /**
     * ARPC
     */
    public arpc?: string,

    /**
     * Verificacion de ARQC
     */
    public arqcVerify?: string,

    /**
     * DF name
     */
    public dfName?: string,

    /**
     * estatus
     */
    public status?: string
  ) {}
}
