/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export interface AutorizaSolVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Id de la autorizacion
     */
    ausId: number;

    /**
     * Identificador de la solicitud
     */
    solId: number;

    /**
     * Descripción del grupo que requiere autorizar
     */
    gruNombre: string;

    /**
     * Usuario que autorizó/rechazó
     */
    usuUsuario: string;

    /**
     * Indica el nivel de autorización
     */
    ausAutoriza: number;

    /**
     * Fecha/Hora de autorización/rechazo
     */
    ausFhautoStr: string;

    /**
     *Indica si el usuario autorizó/rechazó
        */
    ausEstatus: string;

    /**
     * Observaciones de la autorización/rechazo
     */
    ausObservaciones: string;

    /**
     * Tipo de autorizacion
     */
    ausTipo: string;

}