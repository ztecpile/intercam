/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

import { TipoFvalorActivaHistVO } from "./TipoFvalorActivaHistVO";
import { TipoSpreadVO } from "./TipoSpreadVO";

export interface ParametrosInstrumentoVO {

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
    configCompra: number;

    /**
     * Almacena Tipos compra, antes de aplicar regla del dia habil.
     **/
    configCompraHabil: number;

    /**
     * Almacena Tipos venta.
     **/
    configVenta: number;

    /**
     * Almacena Tipos venta, antes de aplicar regla del dia habil.
     **/
    configVentaHabil: number;

    /**
     * Almacena spread.
     **/
    configSpread: number;

    /**
     * Almacena Tipo fecha valor activa.
     **/
    tipoFvalorActiva: TipoFvalorActivaHistVO;

    /**
     * Almacena Tipo spread.
     **/
    tipoSpread: TipoSpreadVO;

}