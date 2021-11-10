/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export interface ContraparteVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Identificador de la contraparte.
     */
    cpaId: string;

    /**
     * Nombre de la contraparte.
     */
    cpaDescripcion: string;

    /**
     * Identificador de la categoría de la contraparte.
     */
    cpeId: number;

    /**
     * Descripcion de la categoria de la contraparte.
     * Este atributo no se persiste, solo se usa para presentar la informacion.
     */
    cpeDescripcion: string;
}