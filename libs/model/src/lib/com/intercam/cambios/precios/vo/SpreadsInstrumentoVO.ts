/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

import { TipoSpreadSucursalVO } from "./TipoSpreadSucursalVO";

export interface SpreadsInstrumentoVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Almacena Id instrumento.
     **/
    insId: number;

    /**
     * Almacena nombre de instrumento.
     **/
    insNombre: string;

    /**
     * Almacena lista de Tipo spread Sucursal.
     **/
    spreadsSucursal: Array<TipoSpreadSucursalVO>;

}