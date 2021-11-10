/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface EstatusFixVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    divisa: string;
    tipoCompraOrig: number;
    tipoVentaOrig: number;
    estatusRecibe: string;
    tpgEsquema: string;
    mesas: Array<any>;
    sourceProcess: string;

}