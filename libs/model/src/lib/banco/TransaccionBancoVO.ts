export class TransaccionBancoVO {
  constructor(
    /**
     * folio transaccion
     */
    public folio: number,
    /**
     * fecha operacion
     */
    public fOperacion: Date,
    /**
     * fecha liquidacion
     */
    public fLiquidacion: Date,
    /**
     * clave de la operacion
     */
    public cveOpe: string,
    /**
     * descripcion operacion
     */
    public descOperacion: string,
    /**
     * descripcion divisa
     */
    public divisa: string,
    /**
     * clave divisa
     */
    public divId: string,
    /**
     * importe
     */
    public importe: number,
    /**
     * status
     */
    public status: string,
    /**
     * descripcion status
     */
    public statusDesc: string,
    /**
     * cuenta cargo
     */
    public cuentaCargo: string,
    /**
     * cuenta abono
     */
    public cuentaAbono: string,
    /**
     * tasa
     */
    public tasa: number,
    /**
     * tasa bruta
     */
    public tasaBruta: number,
    /**
     * comentario
     */
    public comentario: string,
    /**
     * Tipo de Operacion
     * S - Viene (a Sucursal)
     * M - Vamos (con Mensajero)
     */
    public descTipoOpe: string,
    /**
     * Donde Termina la Operacion:
     * V - Ventanilla
     * P - Plataforma
     */
    public descLiquidacion: string,
    /**
     * referencia
     */
    public referencia: string,
    /**
     * referencia id
     */
    public referenciaId: number,
    /**
     * referencia
     */
    public descReferencia: string,
    /**
     * consecutivo
     */
    public otraId: number,

    /**
     * identificador contrato
     */
    public conId: number,
    /**
     * identificador medio origen
     */
    public medId: number,
    /**
     * nota
     */
    public nota: string,

    /**
     * monto
     */
    public monto: number,

    /**
     * equivalenteMN
     */
    public equivalenteMN: number,

    /**
     * Tipo de contratro
     */
    public tipoContrato: string,

    /**
     * Promotor
     */
    public promotor: string,

    /**
     * Sucursal Promotor
     */
    public sucPromotor: string,

    /**
     * Área actualiza estatus
     */
    public areaStatus: string,

    /**
     * Hora de actualización
     */
    public horaActualiza: string,

    /**
     *Tipo persona
     */
    public tipoPersona: string,

    /**
     *deal sica
     */
    public dealSica: string,

    /**
     * Promotor atiende
     */
    public promotorAtiende: string,

    /**
     * folio de ventanilla
     */
    public folioVentanilla: string
  ) {}
}
