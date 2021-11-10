/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface ResutiopeVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Clave de promotor
     */
    clvPro: string;

    /**
     * Clave de cliente
     */
    clvCli: string;

    /**
     * Tipo de operacion
     */
    uopTipoOpera: string;

    /**
     * Clave de divisa
     */
    clvDiv: string;

    /**
     * Instrumento de la operacion
     */
    uopInstrumento: string;

    /**
     * Descripcion del instrumento de la operacion
     */
    uopProducto: string;

    /**
     * Año del registro
     */
    uopAnio: number;

    /**
     * Mes del registro
     */
    uopMes: number;

    /**
     * Monto de la operacion en la divisa capturada
     */
    uopVolDivisa: number;

    /**
     * Utilidad de la operacion
     */
    uopUtilidadBruta: number;

    /**
     * Monto de operacion en dolares
     */
    uopVolUsd: number;

    /**
     * Monto de operacion en Moneda Nacional
     */
    uopVolMn: number;

}