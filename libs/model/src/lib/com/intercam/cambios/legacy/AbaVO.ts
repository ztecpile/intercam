/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export interface AbaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Clave del estado de EEUU del ABA (TX, CA, GA)
     */
    clvAba: string;

    /**
     * Nombre de la institución al que pernenece el ABA.
     */
    desAba: string;

    /**
     * Ciudad dónde se encuentra la institución.
     */
    edoAba: string;

    /**
     * Clave ABA.
     */
    numAba: string;

    /**
     * Estado del ABA.
     */
    otrAba: string;

}