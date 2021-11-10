/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface CtaValidadorVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Identificador de CtaValidador
     */
    cvaId: number;

    /**
     * Tipo A: Abono C: Convenio S: SPEI
     */
    cvaTipo: string;

    /**
     * Campo equivalente en POS
     */
    blbCampop: string;

}