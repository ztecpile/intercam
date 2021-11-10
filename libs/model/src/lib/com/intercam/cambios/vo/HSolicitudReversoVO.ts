/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 *
 * Hist&oacuterico de Solicitudes de Reversos y Recompras
 * 
 * @see com.intercam.cambios.vo.HSolicitudReversoVO.java
*/

import { EstatusSolRevVO } from './EstatusSolRevVO';
import { SolicitudReversoVO } from './SolicitudReversoVO';

export interface HSolicitudReversoVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
         * Identificador del registro
         */
    hsorId: number;

    /**
     * Informacion general de la Solicitud
     */
    solicitudReversoVO: SolicitudReversoVO;

    /**
     * Estatus de la solicitud
     */
    estatusSolRevVO: EstatusSolRevVO;

    /**
     * Fecha de ultima autorizacion
     */
    hsorFechaAutStr: string;

    /**
     * Clave del usuario que autorizo (usuUsuario)
     */
    hsorUsuAuto: string;

    /**
     * Observaciones a la solicitud
     */
    hsorObservaciones: string;

}