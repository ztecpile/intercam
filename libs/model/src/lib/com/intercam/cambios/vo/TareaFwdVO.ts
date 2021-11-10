/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface TareaFwdVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Identificador o numero de folio de la tarea FWD
     */
    tfwId: number;
    /**
     * Tipo Tarea
     */
    tfwTpoTarea: string;
    /**
     * Indica la cecha de alta de la solicitud
     */
    tfwFechSol: Date;
    /**
     * Usuario que solicita
     */
    usuSolicita: string;
    /**
     * Usuario que revisa
     */
    usuRevisa: string;
    /**
     * Fecha de la revicion o autorizacion
     */
    tfwFechaRevisa: Date;
    /**
     * valor
     */
    tfwValor: string;
    /**
     * Accion A = Autorizada P = Pendiente de Aut R = Rechazada
     */
    tfwAccion: string;

}

