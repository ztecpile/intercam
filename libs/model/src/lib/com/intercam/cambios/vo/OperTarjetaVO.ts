/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface OperTarjetaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    otarId: number;
    opiId: number;
    otarTitulo: string;
    otarSufijo: string;
    otarNombre2: string;
    otarFnacimientoStr: string;
    otarNomMadre: string;
    otarIdentificacion: string;
    otarNumIden: string;
    otarCorporativo: string;
    otarNuevo: string;
    otarNomCorto: string;
    otarNombre: string;
    otarApePaterno: string;
    otarApeMaterno: string;
    otarCalle: string;
    otarColonia: string;
    otarDelegacion: string;
    otarCpostal: string;
    otarCiudad: string;
    otarEntidad: string;
    otarTelefono1: string;
    otarTelefono2: string;
    otarMail: string;
    otarTarjeta: string;
    otarTarjetaEnc: string;
    otarTarjetaTitularEnc: string;
    otarAdi: string;
    otarNumeroEnc: string;
    otarNumExterior: string;

    /**
     * Numero interior de la direccion del beneficiario
     */
    otarNumInterior: string;

    /**
     * Identificador del pais
     */
    paiClave: number;

    /**
     * Tipo de tarjeta Debito o cash pass
     */
    otarTipoTarjeta: string;

    /**
     * Identificador de la tarjeta
     **/
    tarId: number;

    /**
     * Nombre completo del beneficiario
     * */
    nombreCompleto: string;

    /**
     * Identificador del beneficiario
     * */
    terId: number;

    /**
     * Numero de la tarjeta titular
     * */
    otarNumTarTitular: string;

    /**
     * Esta de la repetitiva de tarjeta
     * */
    otarEstatus: string;

    /**
     * Usuario que actualiza la repetitiva de tarjeta
     * */
    usuUsuario: string;

    /**
     * Clave legada del titular
     * */
    tmpCveLegada: string;

    /**
     * Id del contrato
     * */
    conId: number;

    /**
     * Tipo de tarjeta Debito o cash pass
     */
    ttaId: number;

    /**
     * Pre Id
     */
    preId: number;

    /**
     * Respuesta de Pregunta Tarjeta
     */
    otarRespuesta: string;

    /**
     * Fecha de Emision
     */
    otarFechaEmision: Date;

    /**
     * Fecha de Expiracion
     */
    otarFechaExpira: Date;

    /**
     * fecha de vencimiento tarjeta
     */
    otarFechaVencimiento: Date;

    /**
     * Banco Emisor
     */
    otarBancoTarjeta: string;

    /**
     * Numero de autorizacion
     */
    otarNumAuto: string;

    /**
     * Numero de autorizacion
     */
    otarNumAfiliacion: string;

    /**
     * Numero de autorizacion
     */
    otarNumTerminal: string;

    /** 
     Especifica si un elemento debe de estar seleccionado.
     */
    conSelected: boolean;

}