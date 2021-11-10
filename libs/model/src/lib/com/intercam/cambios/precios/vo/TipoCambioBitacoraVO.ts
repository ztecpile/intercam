/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export interface TipoCambioBitacoraVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Almacena Identificador de la mesa.
     **/
    cveMesa: number;

    /**
     * Almacena Identificador de la divisa.
     **/
    divId: string;

    /**
     * Almacena Identificador del instrumento.
     **/
    insId: number;

    /**
     * Almacena Identificador de la fecha valor.
     **/
    fvaId: number;

    /**
     * Almacena Fecha del dia en tipo long.
     **/
    tcFechaLong: number;

    /**
     * Almacena Fecha del dia hasta seg. con formato.
     **/
    tcFecha: Date;

    /**
     * Almacena Tipo cambio compra.
     **/
    tcCompra: number;

    /**
     * Almacena Tipo cambio venta.
     **/
    tcVenta: number;

}