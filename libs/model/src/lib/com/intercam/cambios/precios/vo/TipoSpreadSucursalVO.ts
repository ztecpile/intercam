/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export interface TipoSpreadSucursalVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Almacena Identificador clave de la mesa.
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
     * Identificador de usuario
     */
    usUusuario: string;
    /**
     * Identificador de fecha
     */
    tscFecha: Date;
    /**
     * Identificador de hora
     */
    tscHora: Date;
    /**
     * Identificador de tipo Esquema
     */
    tscRelacion: string;
    /**
     * Almacena Spread Compra.
     **/
    tscCompra: number;

    /**
     * Almacena Spread Venta.
     **/
    tscVenta: number;

}