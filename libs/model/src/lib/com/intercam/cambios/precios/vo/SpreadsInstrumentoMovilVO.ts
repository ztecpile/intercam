/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

import { TipoFvalorActivaVO } from "./TipoFvalorActivaVO";
import { TipoSpreadSucursalVO } from "./TipoSpreadSucursalVO";

export interface SpreadsInstrumentoMovilVO {

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
     * Almacena Tipos compra.
     **/
    originalCompra: number;

    /**
     * Almacena Tipos venta.
     **/
    originalVenta: number;

    /**
     * Almacena Tipos compra.
     **/
    configCompra: number;

    /**
     * Almacena Tipos venta.
     **/
    configVenta: number;

    /**
     * Almacena spread.
     **/
    configSpread: number;

    /**
     * Almacena Tipo fecha valor activa.
     **/
    tipoFvalorActiva: TipoFvalorActivaVO;

    /**
     * Almacena Tipo spread Sucursal.
     **/
    tipoSpreadSucursal: TipoSpreadSucursalVO;

}