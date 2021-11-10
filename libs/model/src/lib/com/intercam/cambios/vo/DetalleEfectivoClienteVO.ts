/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface DetalleEfectivoClienteVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     *Almacena clave del cliente
     */
    claveCliente: string;

    /**
     *Almacena la identificaci&oacute;n del cliente
     */
    perId: number;

    /**
     *Almacena el nombre del cliente
     */
    nombreCliente: string;

    /**
     *Almacena el tipo de persona
     */
    tipoPersona: string;

    /**
     *Almacena el numero de cliente
     */
    numCliente: number;

    /**
     *Almacena la nacionalidad del cliente
     */
    nacionalidad: string;

    /**
     *Almacena el pais de nacionalidad del cliente
     */
    paisNac: string;

    /**
     *Almacena la calle 
     */
    calle: string;

    /**
     *Almacena el numero exterior
     */
    numExt: string;

    /**
     *Almacena el numero interiror
     */
    numInt: string;

    /**
     *Almacena la colonia
     */
    colonia: string;

    /**
     *Almacena el municipio
     */
    municipio: string;

    /**
     *Almacena la ciudad
     */
    ciudad: string;

    /**
     *Almacena la entidad federativa
     */
    entidadFed: string;

    /**
     *Almacena el c&oacute;digo postal
     */
    codigoPostal: string;

    /**
     *Almacena la actividad del cliente
     */
    actividadCliente: string;

    /**
     *Almacena el deal 
     */
    deal: number;

    /**
     *Almacena el instrumento
     */
    instrumento: number;

    /**
     *Almacena el tipo de operaci&oacute;n
     */
    tipoOperacion: string;

    /**
     *Almacena divisas
     */
    divisas: string;

    /**
     *Almacena la fecha de operaci&oacute;n
     */
    fchOperacion: string;

    /**
     *Almacena la fecha de vencimiento
     */
    fchVencimiento: string;

    /**
     *Almacena el monto de la operaci&oacute;n
     */
    montoOperacion: number;

    /**
     *Almacena la hora de la operaci&oacute;n
     */
    horaOperacion: string;

    /**
     *Almacena el tipo de cambio
     */
    tipoCambio: number;

    /**
     *Almacena el origen del promotor
     */
    origenPromotor: string;

    /**
     *Almacena la fecha de alta del cliente
     */
    fchAltaCliente: string;

    /**
     *Almacena el promotor
     */
    promotor: string;

    /**
     *Almacena la identificaci&oacute;n del cliente
     */
    identificacionCliente: string;

    /**
     *Almacena el nùmero de identificaci&oacute;n
     */
    numIdentificacion: string;

    /**
     *Almacena la fecha de vencimiento de la identificaci&oacute;n
     */
    fchVencimientoIdentif: string;

    /**
     *Almacena el id del documento
     */
    docId: number;

}