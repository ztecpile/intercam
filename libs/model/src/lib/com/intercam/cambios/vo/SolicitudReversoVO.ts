/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
     * Solicitudes de Reversos y Recompras
     * 
     * @see com.intercam.cambios.vo.SolicitudReversoVO.java
*/

import { TipoContratoVO } from '../../corporativo/contrato/vo/TipoContratoVO';
import { CausaReversoVO } from './CausaReversoVO';
import { EstatusSolRevVO } from './EstatusSolRevVO';
import { PagoOperacionVO } from './PagoOperacionVO';

export interface SolicitudReversoVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Identificador de la Solicitud de Revereso
     */
    sorId: number;

    /**
     * Identificador del OperInstrumento asociado a la Solicitud de Revereso
     */
    opiId: number;

    /**
     * Causa de la Solicitud de Revereso
     */
    causaReversoVO: CausaReversoVO;

    /**
     * Estatus de la Solicitud de Revereso
     */
    estatusSolRevVO: EstatusSolRevVO;

    /**
     * DEAL asociado a la operacion Reversa que integra el reverso generado
     */
    sorDealReva: number;

    /**
     * DEAL asociado a la operacion Sustituta que integra el reverso generado
     */
    sorDealSust: number;

    /**
     * Clave de autorizacion de la Solicitud de Revereso
     */
    sorClave: string;

    /**
     * Fecha en que se realiza la Solicitud de Revereso
     */
    sorFechaSolStr: string;

    /**
     * Fecha en que se realizo la ultima autorizacion de la Solicitud de Revereso
     */
    sorFechaAutStr: string;

    /**
     * Usuario que realiza la Solicitud de Revereso
     */
    sorUsuSol: string;

    /**
     * Usuario que realizo la ultima autorizacion de la Solicitud de Revereso
     */
    sorUsuAuto: string;

    /**
     * Observaciones del proceso de autorizacion de la Solicitud de Revereso
     */
    sorObservaciones: string;

    /**
     * Valor del monto solicitado a cambiar, el cual se asocia a la nueva operacion (Sustituta)
     **/
    sorOpiMonto: number;

    /**
     * Clave original del banco en pesos, de la operacion original
     *   clv_ban de de ctaban para el banco en pesos
     */
    bapOpe: string;

    /**
     * Descripcion corta original del banco en pesos, de la operacion original
     *   cor_cta de ctaban para el banco en presos
     */
    corCtap: string;

    /**
     * Clave original del banco en divisa, de la operacion original
     *   clv_ban de de ctaban para el banco en divisa
     */
    barOpe: string;

    /**
     * Descripcion corta original del banco en divisa, de la operacion original
     *   cor_cta de ctaban para el banco en divisa
     */
    corCtar: string;

    /**
     * Conjunto de pagos de cheques a reversar
     */
    pagosOperVO: Array<PagoOperacionVO>;

    /**
     * Tipo de Contrato (Negocio) de la operacion a reversar
     *      Campo no persistido, uso local 
     */
    tipoContratoVO: TipoContratoVO;

    /**
     * Deal de SICA a reversar
     *      Campo no persistido, uso local 
     */
    tmpDealsica: number;

    /**
     * Clave de la operacion proveniente de SICA asociada a la operacion original a reversar
     *       Campo no persistido, uso local 
     */
    opiDealReversar: number;

    /**
     * Clave legada del cliente asociado a la operacion a reversar
     *      Campo no persistido, uso local 
     */
    tmpCveClieSica: string;

    /**
     * Clave legada de la sucursal a la que pertenece el cliente
     *      Campo no persistido, uso local 
     */
    tmpCveSucLegada: string;

    /**
     * Monto de la operacion a reversar
     *      Campo no persistido, uso local 
     */
    opiMonto: number;

    /**
     * Diferencia en pesos entre los montos de la operacion a reversar y el monto solicitado
     *      Campo no persistido, uso local
     **/
    diferenciaPesos: number;

    /**
     * Determina si se aplica el reverso como anticipado
     *          true:   si la operacion aplica para reverso anticipado
     *          false:  si la operacion no aplica para reverso anticipado
     *      Campo no persistido, uso local
     */
    revAnticipado: boolean;

    /**
     * Determina si el reverso se manejara como un canje o como una o dos operaciones independientes
     *          true:   si el reverso se manejara como un canje
     *          false:  si el reverso se manejara como una o dos operaciones independientes
     *      Campo no persistido, uso local
     */
    revAsCanje: boolean;

    /**
     * Determina si la operacion original cambio la configuracion de sus bancos, lo que implica que se actualizarce
     *          true:   si la original cambio la configuracion de sus bancos
     *          false:  si original no cambio la configuracion de sus bancos
     *      Campo no persistido, uso local
     */
    changeOpeOrg: boolean;

    /**
     * Determina si el usuario requiere completar la informacion de los pagos asociados a la DIVISA
     *          true:   si se requiere completar informacion de los pagos de la Divisa
     *          false:  no se requiere completar informacion de los pagos de la Divisa
     *      Campo no persistido, uso local
     */
    completePagosDivisa: boolean;

    /**
     * Determina si el usuario requiere completar la informacion de los pagos asociados a los PESOS
     *          true:   si se requiere completar informacion de los pagos de los Pesos
     *          false:  no se requiere completar informacion de los pagos de los Pesos
     *      Campo no persistido, uso local
     */
    completePagosPesos: boolean;

    /**
     * Determina si se deben realizar todas las validaciones o unicamente las generales
     *      - true:  Se deben realizar todas las validaciones
     *      - false: Solo se deben realizar las validaciones generales
     *      Campo no persistido, uso local
     */
    validateAll: boolean;

    /**
     * Fecha valor maxima permitida para reverso por fecha valor
     *      No mayor a 96 Hrs, respeto a al fecha de la operacion original del reverso
     *      Campo no persistido, uso local
     */
    fvaIdMaximo: number;

    /**
     * Indica el grupo al que pertenece el usuario
     *       GRUPO_PROM_DIVISAS:        PROMOTORDIVISAS
     *       GRUPO_REVERSOS_CONTROL:    REVERSOSCONTROL
     *       GRUPO_REVERSOS_MESA:       REVERSOSMESA
     *       GRUPO_REVERSOS_TESORERIA:  REVERSOSTESORERIA
     *      Campo no persistido, uso local
     */
    grupoUsuario: string;

    /**
     * Lista de perId's de los usuarios que pueden reversar la operacion
     *      Campo no persistido
     */
    lstPerId: Array<number>;

}