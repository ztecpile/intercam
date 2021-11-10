/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export interface FolioOpeSicaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Clave sucursal
     */
    clvSuc: string;
    /**
     * Identificador del folio
     */
    ferFolio: number;
    /**
     * Deal de la operacion
     */
    clvOpe: number;
    /**
     * Estatus del folio
     */
    ferEstatus: number;
    /**
     * Clave del Usuario
     */
    ferUsuario: number;
    /**
     * Fecha de alta
     */
    ferFechaStr: string;

}