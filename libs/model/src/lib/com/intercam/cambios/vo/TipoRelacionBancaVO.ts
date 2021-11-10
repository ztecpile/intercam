/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { MotivoPagoBancaVO } from './MotivoPagoBancaVO';

export interface TipoRelacionBancaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    ctiCodigo: string;
    ctiDescri: string;
    ctiEstatus: string;
    motivoPagoVO: Array<MotivoPagoBancaVO>;
}
