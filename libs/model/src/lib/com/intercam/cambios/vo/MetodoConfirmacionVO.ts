/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 * 
 * Cat&aacute;logo de m&eacute;todos de confirmaci&oacute;n de operaciones
 **/
export interface MetodoConfirmacionVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Identificador del m&eacute;todo de confirmaci&oacute;n.
     */
    mecId: number;

    /**
     * Descripcion del m&eacute;todo de confirmaci&oacute;n. 
     */
    mecDescripcion: string;

    /**
     * Estatus del registro (AC/SU).
     */
    mecEstatus: string;

}