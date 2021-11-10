/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface EnvioMensajeConfOpVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Deal de la Operacion
     */
    dealOp: number;

    /**
     * Nombre dle cliente
     */
    nombreCliente: string;

    /**
     * Fecha de la operacion
     */
    fechaOper: Date;

    /**
     * Hora del envio de la confirmacion
     */
    horaEnvioConf: Date;

    /**
     * Fecha de la operacion String
     */
    fechaOperStr: string;

    /**
     * Hora del envio de la confirmacion String
     */
    horaEnvioConfStr: string;

    /**
     * dorecciond el conrreo donde se envio
     * la confirmacion
     */
    correoConfirmacion: string;

    /**
     * Clave del Cliente
     */
    claveCliente: string;

    /**
     * Clave de la sucursal legada
     */
    tmpCveSucLegada: string;

    /**
     * Clave del usuario
     */
    usuUsuario: string;

    /**
     * Id del Contrato
     */
    conId: number;

    /**
     * Tipo de contrato
     */
    tConId: number;

    /**
     * Indica si fue Envio "E" o Reenvio "R"
     */
    tipoEnvioCorreo: string;

    /**
     * Muestra el origen de la operacion
     */
    origenOp: string;

    /**
     * Fecha de Vencimiento de la operacion String
     */
    fechaVenciStr: string;

    /**
     * Tipo de persona(cliente)
     * F: Fisica
     * M: Moral
     */
    tipoPersona: string;

    /**
     * Fecha de Vencimiento de la operacion
     */
    fechaVenci: Date;

    /**
     * Clave promotor
     */
    clvPromotor: string;

    /**
     * Nombre promotor
     */
    nomPromotor: string;

    /**
     * Correo promotor
     */
    correoPro: string;

    /**
     *  Sucursal origen promotor
     */
    sucOrigen: string;

    /**
     * Extension promotor
     */
    extPromotor: string;

    /**
     * Estatus promotor
     */
    edoPromotor: string;

    /**
     * Clave sucursal
     */
    clvSuc: string;

    /**
     * Mensaje validacion SPID
     */
    motivoEnvio: string;

    /**
     * Mensaje ID
     */
    menId: number;

}