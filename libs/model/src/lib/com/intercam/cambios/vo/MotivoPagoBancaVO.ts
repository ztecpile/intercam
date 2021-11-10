/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { TipoRelacionBancaVO } from './TipoRelacionBancaVO';

export interface MotivoPagoBancaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    smpCodigo: string;
    ctiCodigoVO: Array<TipoRelacionBancaVO>;
    smpDescri: string;
    smpEstatus: string;

}