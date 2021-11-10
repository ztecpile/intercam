/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface SpreadMXIVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Clave de la mesa
     */
    mesCveMesa: number;

    /**
     * Clave de la divisa sica
     */
    clvDiv: string;

    /**
     * Id del instrumento
     */
    insOpe: number;

    /**
     * Descripcion del instrumento
     */
    insNombre: string;

    /**
     * Spread para la divisa compra(se suma al valor de la divisa)
     */
    sxiSpreadc: number;

    /**
     * Bandera que indica si se considera la divisa-tipo compra
     */
    sxiFlagCom: string;

    /**
     * Spread para la divisa venta(se suma al valor de la divisa)
     */
    sxiSpreadv: number;

    /**
     * Bandera que indica si se considera la divisa-tipo venta
     */
    sxiFlagven: string;

    /**
     * Fecha en que aplican los puntos configurados
     */
    sxiFecha: Date;

    /**
     * Clave de usuario que realiza cambios
     */
    sxiClvPro: string;

    /**
     * Clave de instrumento al que va relacionado (toma los tipos de este como refencia)
     */
    sxiInsUsd: number;

    /**
     * Nombre de instrumento al que va relacionado (toma los tipos de este como refencia)
     */
    sxiInsUsdNombre: string;

    /**
     * Bandera que indica si hay cambios a afectar en bd.
     */
    cambio: string;

}