/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export class ReenvioFacturaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena clave del Cliente.
     **/
    clvCliente: string;

    /**
     * Almacena clave de la Divisa.
     **/
    clvDivisa: string;

    /**
     * Almacena clave de Ingreso registrado.
     */
    clvIngreso: number;

    /**
     * Almacena clave de la Operaci&oacute;n (DEAL).
     **/
    clvOperacion: number;

    /**
     * Almacena fecha de expedici&oacute;n de la Factura.
     **/
    facFechaExpedicion: Date;

    /**
     * Almacena folio de la Factura.
     **/
    facFolio: number;

    /**
     * Almacena monto de la Factura.
     **/
    facMonto: number;

    /**
     * Almacena n&uacute;mero de serie de la Factura
     **/
    facSerie: string;

    /**
     * Almacena Id del Instrumento.
     **/
    insId: number;

    /**
     * Almacena RFC de la empresa.
     **/
    rfcEmpresa: string;

    /**
     * Bandera utilizada para indicar si la Operaci&oacute;n
     * ha sido seleccionada para el reenv&iacute;o de Factura
     **/
    seleccionado: boolean;

}