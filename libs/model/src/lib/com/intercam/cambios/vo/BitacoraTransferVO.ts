/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface BitacoraTransferVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * identificador del registro de notificación
     */
    btrId: number;

    /**
     * Clave del usuario que recibe la notificación
     */
    usuUsuario: string;

    /**
     * Fecha y hora en que se realiza la notificación
     */
    btrFnotificacionStr: string;

    /**
     * Numero del contrato al que pertenece la transferencia en la que se realiza la notificación
     */
    conId: number;

}