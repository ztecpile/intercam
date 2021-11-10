/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { VaRVO } from './VaRVO';

export interface MonitorVaRVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Lista con calculos var para portafolio
     */
    listPortafolio: Array<VaRVO>;

    /**
     * Lista con calculos var por subyacente
     */
    listSubyacente: Array<VaRVO>;

    /**
     * Lista con calculos var por operaciones
     */
    listOperaciones: Array<VaRVO>;

    /**
     * True indica que el VaR al 99% excedio al limite var configurado
     */
    exceso: boolean;

}