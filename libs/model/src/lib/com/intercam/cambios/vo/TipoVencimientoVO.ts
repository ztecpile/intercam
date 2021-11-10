/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface TipoVencimientoVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Identificador del tipo de vencimiento
     */
    tveId: number;

    /**
     * Descripcion del tipo de vencimiento
     */
    tveDescripcion: string;

    /**
     * Estatus del vencimiento AC/SU
     */
    tveEstatus: string;

    /**
     * Bandera que indica si el vencimiento se presenta o no en la pantalla de cotizacione de FWD
     */
    tveVisible: boolean;

}