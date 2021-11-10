/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { InstrumentoVO } from './InstrumentoVO';

export interface CatLiquidaRevVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Identificador del Tipo de Liquidacion del Reverso/Recompra
     */
    clrId: number;

    /**
     * Instrumento asociado al tipo de Liquidacion
     */
    instrumentoVO: InstrumentoVO;

    /**
     * Descripcion del tipo de liquidacion del Reverso/Recompra
     */
    clrDescripcion: string;

    /**
     * Claves de liquidacion validas para la Entrega en un Reverso/Recompra
     */
    clrClaveEntrega: string;

    /**
     * Claves de liquidacion validas para la Recepcion en un Reverso/Recompra
     */
    clrClaveRecibe: string;

    /**
     * Estatus del registro
     *      AC: Activo
     *      SU: Suspendido
     */
    clrEstatus: string;

}