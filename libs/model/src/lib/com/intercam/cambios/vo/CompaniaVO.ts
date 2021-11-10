/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface CompaniaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Id de la tabla de compania
     */
    comClave: number;

    /**
     * Descripcion de la compania
     */
    comDescrip: string;

    /**
     * Clave de la direccion de la compania
     */
    dirClave: number;

    /**
     * Clave del pais al que pertenece la compania
     */
    paiClave: number;

    /**
     * Estatus de la compania
     */
    comEstatus: string;

    /**
     * RFC de la compania
     */
    comRFC: string;

    /**
     * Numero de fax
     */
    comFaxFisca: string;

    /**
     * Numero telefonico
     */
    comTelFisca: string;

    /**
     * Razon Social de la compania
     */
    comRazon: string;

    /**
     * Direccion electronica
     */
    comUrl: string;

    /**
     * clave sica de la compania
     */
    comSucCtral: string;

}