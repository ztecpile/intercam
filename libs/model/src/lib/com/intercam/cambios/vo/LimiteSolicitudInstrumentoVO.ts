/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface LimiteSolicitudInstrumentoVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena Id del l&iacute;mite para la solicitud de cambio de instrumento.
     */
    lsiId: number;

    /**
     * Almacena el monto l&iacute;mite de la solicitud.
     */
    lsiMontoLim: number;

    /**
     * Almacena el horario l&iacute;mite para la solicitud.
     */
    lsiHorarioLim: Date;

    /**
     * Almacena el estatus del registro.
     */
    lsiEstatus: string;

    /**
     * Almacena la clave de mesa asociada al l&iacute;mite.
     */
    lsiMesa: number;

    /**
     * Almacena la clave de usuario que registra.
     */
    lsiUsuario: string;

}