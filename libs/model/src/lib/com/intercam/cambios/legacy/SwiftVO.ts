/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export interface SwiftVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Clave de SWIFT.
     */
    clvSwf: string;

    /**
     * País.
     */
    desPai: string;

    /**
     * Ciudad.
     */
    desCiu: string;

    /**
     * Institución.
     */
    banTra: string;

    /**
     *
     */
    desBrc: string;

    /**
     * Clave internacional del pais(FR), atributo para enviar valor del POS.
     */
    paiIntCode: string;

}