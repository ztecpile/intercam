/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { AutorizaSolVO } from './AutorizaSolVO';
import { MotivoSolVO } from './MotivoSolVO';
import { OperacionVO } from './OperacionVO';

export interface SolicitudVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Identificador de la solicitud
     */
    solId: number;

    /**
     * Tipo de solicitud: Cancelacion/Modificación
     */
    solTipo: string;

    /**
     * Identificador catálogo motivo de solicitud
     */
    motivoSolVO: MotivoSolVO;

    /**
     * Estatus de la solicitud: en solicitud, aceptada, rechazada, reverso.
     */
    solEstatus: string;

    /**
     * Fecha/Hora de captura de la solicitud
     */
    solFhCapturaStr: string;

    /**
     * Fecha/Hora captura local de la solcitud
     */
    solFhCapturaLocalStr: string;

    /**
     * Usuario que catpuró la solicitud
     */
    usuUsuario: string;

    /**
     * Observaciones del Usuario
     */
    solObservaciones: string;

    /**
     * Identificador de la operación
     */
    operacionVO: OperacionVO;

    /**
     *  Diferencia de horario local
     */
    fechaDif: number;

    /**
    * Autorizaciones de la solicitud
    */
    autorizacionesVO: Array<AutorizaSolVO>;

    /**
    * Contiene la hora de captura de la solicitud
    */
    horaCaptura: string;

    /**
     * El deal de SICA asociado a la solicitud 
     */
    tmpDealSica: number;

    /**
     * Clave sica de que autoriza o rechaza la solicitud de modificacion o concelacion
     */
    clvPro: string;

}
