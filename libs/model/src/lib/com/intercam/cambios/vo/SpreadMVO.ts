/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface SpreadMVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Clave de la mesa
     */
    mesCveMesa: number;

    /**
     * Clave de la divisa en sica
     */
    clvDiv: string;

    /**
     * Id del instrumento
     */
    insId: number;

    /**
     * Descripcion del instrumento
     */
    insNombre: string;

    /**
     * Puntos que se sumaran al valor de la compra 48 hrs
     */
    tppBidCompra48: number;

    /**
     * Puntos que se sumaran al valor de la venta 48 hrs
     */
    tppBidVenta48: number;

    /**
     * Puntos que se sumaran al valor de la compra 24 hrs
     */
    tppBidCompra24: number;

    /**
     * Puntos que se sumaran al valor de la venta 48 hrs
     */
    tppBidVenta24: number;

    /**
     * Puntos que se sumaran al valor de la compra hoy
     */
    tppBidCompraHoy: number;

    /**
     * Puntos que se sumaran al valor de la compra hoy
     */
    tppBidVentaHoy: number;

    /**
     * Clave de la sucursal sica
     */
    clvSuc: string;

    /**
     * Bandera que indica si sufrio modificacion para actualizar en bd
     */
    cambio: string;

}