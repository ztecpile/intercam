/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

import { TipoCambioVO } from "./TipoCambioVO";

export interface TipoCambioInstrumentoVO {

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
     * Indica el cambio de un elemento de la lista de Tipo Cambio. 
     **/
    hasChanged: boolean;

    /**
     * Almacena lista de Tipo Cambio.
     **/
    tiposCambio: Array<TipoCambioVO>;

}