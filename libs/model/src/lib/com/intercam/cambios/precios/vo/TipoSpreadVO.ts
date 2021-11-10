/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export interface TipoSpreadVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Identificador del spread
     */
    tsId: number;

    /**
     * Almacena Esquema al que esta relacionado.
     **/
    teId: number;

    /**
     * Almacena Identificador del instrumento. 
     **/
    insId: number;

    /**
     * Almacena Identificador de la fecha valor.
     */
    fvaId: number;

    /**
     * Almacena Spread Compra.
     **/
    tsCompra: number;

    /**
     * Almacena Spread Venta.
     **/
    tsVenta: number;

    /**
     * Almacena Opcion modificacion de spread de compra para sucursales activo(1)/inactivo(0).
     **/
    tsCompraSuc: number;

    /**
     * Almacena Opcion modificacion spread de venta para sucursales activo(1)/inactivo(0).
     **/
    tsVentaSuc: number;

}