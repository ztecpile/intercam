/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface MotivoSolVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Identificador del Motivosolicitud
     */
    mosId: number;

    /**
     * Descripción del motivo
     */
    mosDescrip: string;

    /**
     * Tipo de motivo: MOD=modificacion, CAN=cancelacion
     */
    solTipo: string;

}