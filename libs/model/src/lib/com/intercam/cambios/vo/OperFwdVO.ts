/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { ParDivisaVO } from '../precios/vo/ParDivisaVO';
import { AutTransFwdVO } from './AutTransFwdVO';
import { TipoVencimientoVO } from './TipoVencimientoVO';

export interface OperFwdVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Identificador o numero de folio de la operacion FWD
     */
    fwdId: number;

    /**
     * Identificador del instrumento al que queda asociada la operacion FWD
     */
    opiId: number;

    /**
     * Valor de SPOT al momento de pactar la operacion FWD
     */
    fwdSpot: number;

    /**
     * Puntos que se añaden al SPOT para determinar el tipo de cambio
     */
    fwdPtosfwd: number;

    /**
     * Monto de la Garantia inicial al pactar la operacion
     */
    fwdGarantiaInicial: number;

    /**
     * Monto de la Garantia Requerida
     */
    fwdGarantia: number;

    /**
     * Monto de la Garantia Abonada
     */
    fwdGarantiaAbonada: number;

    /**
     * Indica si es una operacion requiere o no garantia
     * True:  Requiere garantia (se valida)
     * False: No requiere garantia (no se valida)
     */
    fwdOpSinGarantia: boolean;

    /**
     * Numero de dias naturales en que vencerá la operacion FWD
     */
    fwdPlazo: number;

    /**
     * Indica si la operacion se pactó o no con exepcion (El promotor determina el tipo de costo)
     * True:  Se pacto con excepcion
     * False: Se pacto sin excepcion
     */
    fwdConExcepcion: boolean;

    /**
     * Motivo de la captura con excepcion, podra tener los valores:
     * 1 ó 2   si se pacto con excepcion
     * null    si no se pacto con excepcion
     */
    fwdMotivoExcep: number;

    /**
     * Bandera que indica si cubre o no la garantia
     * True    Si se cubrio el monto de la garantia requerida
     * False   No no se cubrio el monto de la garantia requerida
     */
    fwdCubreGarantia: boolean;

    /**
     * Id estatus de la Operaci&oacute;n FWD (autorizaci&oacute;n)
     **/
    fwdEstatus: number;

    /**
     * Descripci&oacute;n estatus de la Operaci&oacute;n FWD
     *
     *  0- Pactada
     *  1- Completa/Aut. Mesa Operación
     *  3- Aut. Mesa Control
     *  4- Confirma Cliente
     *  5- RE:Confirma Cliente
     *  6- Garantia Cubierta
     *  7- Rechazada
     *  8- Cancelada
     *  9- Vencimiento Anticipado
     * 10- Vencimiento Normal
     **/
    fwdEstatusStr: string;

    /**
     * Comision o costo de la operación para promotor cuando se rechace o cancele la operación.
     * El lo captura la Mesa de Control
     */
    fwdCostoComision: number;

    /**
     * Identificador de la operacion FWD padre (Id de la operacion FWD original)
     * Se utiliza cuando la operacion es generada por un vencimiento anticipado parcial
     */
    fwdIdPadre: number;

    /**
     * Bandera para indicar que la operacion se encuentre en llamada de margen.
     * True:  La operacion FWD se encuentra en llamada de margen
     * False: La operacion FWD NO se encuentra en llamada de margen
     */
    fwdLlamMargen: boolean;

    /**
     * Clasificacion interna de los tipos de Operacion FWD
     * F = Forward normal
     * C = Cotizacion
     * V = Vencimiento
     * S = Simulada
     */
    fwdTipoOp: string;

    /**
     * Objeto ParDivisaVO con la informacion del Subyacente asociado a al operacon FWD
     */
    parDivisaVO: ParDivisaVO;

    /**
     * Objeto TipoVencimientoVO con la informacion del tipo de vencimiento que se aplico a la operacion FWD
     * Si aun no se le aplica ningun tipo de vencimiento, será NULL
     */
    tipoVencimientoVO: TipoVencimientoVO;

    /**
     * Conjunto de objetos AutTransFwdVO
     * Representan las tareas por las que ha pasado la operacion o tiene pendiente por atender
     */
    autTransFwdVO: Array<AutTransFwdVO>;

    /**
     * se almacena el valor del monto x base
     * Atributo NO Persistido, requerido para los grid de los monitores
     */
    montoBase: number;

    /**
     * Numero de dias naturales faltantes para el vencimiento la operacion FWD
     * Atributo NO Persistido, requerido para el "monitor" de operaciones a vencer
     */
    fwdPlazoRem: number;

    /**
     * Motivo de la operacion 
     * Promoción. Operaciones capturadas por promotores.
     * Mesa. Operaciones capturadas por la mesa.
     * Atributo NO Persistido, requerido para la vista del monitor 
     * de mesa de operaciones
     */
    motivoOpe: string;

    /**
     * Atributo que almacena el String si es natural o con excepcion
     */
    fwdConExcepcionStr: string;

    /**
     * Saldo que tiene el cliente en la intercuenta FWD
     */
    garantiaValuada: number;

    /**
     * Faltante o sobrante para el monitor de garantia
     */
    faltanteSobrante: number;

    /**
     * Indica si se opera con garantia
     */
    opsinGta: string;

    /**
     * Factor de llamada de margen.
     */
    cfwFacMargen: number;

    /**
     * Porcentaje de Garantia
     */
    cfwGtia: number;

    /**
     * Operacion nueva / llamada de margen
     */
    operNvaLLamada: string;

    /**
     * se almacena el valor del monto x base
     * Atributo NO Persistido, requerido para los grid de los monitores
     */
    tipoBase: number;

    /**
     * monto perdida
     */
    cfwMtoPer: number;

    /**
     * Monto a depositar
     */
    montoGaranInicial: number;

    /**
     * Garantias
     */
    gaGi: number;

    /**
     * Resultado de cierre
     */
    resultadoCierre: number;

    /**
     * Resultado de cierre
     */
    condicionanteMargen: number;

    /**
     * Valuacion de la posicion en tiempo real
     */
    valuacionPosicionReal: number;

    /**
     * Hora y fecha de la generacion del reporte en llamada de margen 
     */
    horaFechaGeneracion: string;

    /**
     * Faltante sobrante TR
     */
    faltanteSobrateTr: number;

    /**
     * 
     **/
    valuacionPosicion: number;

    /**
     * Bandera que inidica si una propiedad editable se modifico;     */
    modicable: boolean;

    /**
     * Taza Local con el que se raliza el calculo de diferencial de un vencimiento anticipado
     */
    fwdTasaLocalVenc: number;

    /**
     * Diferencial del vencimiento anticipado,
     * Corresponde al cargo/abono que se debe aplicar a la cuenta del cliente
     */
    fwdDiferencial: number;

    /**
     * Atributo no persistido, se almacena el numero de cuenta forward
     */
    noCuentaFwd: string;

    /**
     * Indica si la operaci&oacute;n es con cotraparte.
     */
    fwdEsContraparte: boolean;

    /**
     * Atributo no persistido, se ocupa para saber si tiene sobrante de garantia
     **/
    sobrante: boolean;

    /**
     * 
     **/
    saldoCuentaFwd: number;

    /**
     * Atributo no persistido que indica cuando una confirmacion de
     * operacionFwd se invoca desde el wizard.
     **/
    vieneDeConsulta: boolean;

    /**
     * Abono o cargo que se le hara a la cuenta para 
     * cubir la garantia
     */
    abonoGarantia: number;

    /**
     * Atributo no persistido, muestra el area de negocio
     */
    areaNegocio: string;

    /**
     * Consumo contraparte de la operacion forward
     */
    fwdConsContraparte: number;

    /**
     * 
     */
    isLoadImage: boolean;

    /**
     * Atributo no persistido, muestra si el cliente esta en llamada
     */
    enLLamada: string;

    /**
     * 
     */
    liberadoFavor: number;

    /**
     * 
     */
    garantiaSaldoEnlace: string;

    /**
     * Bandera para indicar que la operacion se encuentre en llamada de margen.
     * True:   La operacion FWD incluye operaciones simuladas
     * False:  La operacion FWD NO incluye operaciones simuladasincluye operaciones simuladas
     */
    fwdMarcaSim: boolean;

    /**
     * Fecha y hora de generación de la llamada de margen.
     */
    fwdFllamadaMargen: Date;

    /**
     * Almacena nivel de la Tarea.
     */
    atfNivel: number;

    /**
     * Almacena el motivo de la excepcion
     */
    fwdMotivoExcepStr: string;

    /**
     * 
     */
    cargoAbonoGarantia: number;

    /**
     * Atributo no persistido, se ocupara para 
     * mostar el status fwd y spot de la operacion
     */
    fwdEstatusMonOperLiquida: string;

    /**
     * Almacena el monto a vencer a una operacion por incumplimiento
     */
    fwdMontoVencer: number;

    /**
     * Almcena las observaciones de un vencimiento parcial por incumplimiento
     */
    fwdObservaVenci: string;

    /**
     * Indica si la operacion FWD es una Non Delivery FWD
     * 'F' o 'V'
     */
    fwdNdf: string;

    /**
     * Indica el perId de la persona que autorizo el NDF
     */
    fwdNdfPersona: number;

    /**
     * Indicaciones del NDF
     */
    fwdNdfInst: string;

    /**
     * Indica si hoy la operacion vence hoy 'F' o 'V'
     */
    venceHoy: string;
    fwdIsVen: string;

    /**
     * Indica si es una operacion de sica cobertura, cero si es operacion FWD, 2 si es SWAP
     */
    tipoCobertura: number;

    /**
     * Recibe el saldo de la cuenta enlace
     */
    fwdSaldoCuentaEnlace: number;

    /**
     * Recibe el Saldo de la cuenta garantia derivados
     */
    fwdSaldoGarantiaDerivados: number;

    /**
     * Recibe la cuenta enlace
     */
    fwdCuentaEnlace: string;

    /**
     * Monto minimo para liberar de llamada de margen
     */
    montoMinLlamada: number;

}