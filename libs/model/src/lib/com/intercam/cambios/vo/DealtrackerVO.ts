/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { OperInstrumentoVO } from './OperInstrumentoVO';

export interface DealtrackerVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    tdtId: number;
    tdtTicket: string;
    tmpCvePro: string;
    tdtFecha: Date;
    tdtHora: Date;
    tdtHoraStr: string;
    tdtEstatus: number;
    tdtMsjDeal: string;
    operInstrumentoVO: OperInstrumentoVO;

}