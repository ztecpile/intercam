/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

import { TipoFvalorActivaVO } from "./TipoFvalorActivaVO";
import { TipoSpreadVO } from "./TipoSpreadVO";
import { TipoTasaFwdVO } from "./TipoTasaFwdVO";

export interface TipoEsquemaHistVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Almacena Identificador del Tipo de Esquema.
     **/
    teId: number;

    /**
     * Almacena Identificador clave de la Mesa.
     **/
    cveMesa: number;

    /**
     * Almacena Identificador de la divisa.
     **/
    divId: string;

    /**
     * Almacena Clave del usuario.
     **/
    usuUsuario: string;

    /**
     * Almacena Fecha de registro.
     **/
    teFecha: Date;

    /**
     * Almacena Tipo de cambio base, compra(C)/venta(V).
     **/
    teTcambioBase: string;

    /**
     * Almacena Spread minimo.
     **/
    teSpreadMinimo: number;

    /**
     * Almacena Puntos de variacion.
     **/
    teConfVariacion: number;

    /**
     * Almacena Puntos variacion spread.
     **/
    teConfSpread: number;

    /**
     * Almacena Tipo de esquema Manual(M)/Automatico(A).
     **/
    teEsquema: string;

    /**
     * Almacena Tipo cambio Compra Manual.
     **/
    teTcambioCompra: number;

    /**
     * Almacena Tipo cambio Venta Manual.
     **/
    teTcambioVenta: number;

    /**
     * Almacena Conjunto de spread configurados para 48 hrs.
     **/
    spreadsVO: Array<TipoSpreadVO>;

    /**
     * Almacena Conjunto de tasas forward por fecha valor.
     **/
    tasasVO: Array<TipoTasaFwdVO>;

    /**
     * Almacena Configuraciones que activan(1)/desactivan(0) los tipos por fecha e instrumento.
     **/
    fechasActivasVO: Array<TipoFvalorActivaVO>;

}