/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export interface TipoFvalorActivaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena Identificador de la fecha valor.
     **/
    tfaId: number;

    /**
     * Almacena Esquema al que pertenecen los spreads.
     **/
    teId: number;

    /**
     * Almacena Identificador del Instrumento.
     **/
    insId: number;

    /**
     * Almacena Identificador de la fecha valor.
     **/
    fvaId: number;

    /**
     * Almacena Tipo compra activo para la fecha valor, instrumento y esquema.
     **/
    tfaCompraAct: number;

    /**
     * Almacena Tipo venta activo para la fecha valor, intrumento y esquema.
     **/
    tfaVentaAct: number;

}