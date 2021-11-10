/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface UsoCfdiVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Clave del catalogo UsoCfdi
     */
    ucfClave: string;

    /**
     * Descripcion del uso Cfdi
     */
    ucfDescrip: string;

    /**
     * Indica si aplica para persona Fisica
     */
    ucfFisica: boolean;

    /**
     * Indica si aplica para persona Moral
     */
    ucfMoral: boolean;

    /**
     * Indica el orden en que debe aparecer a la vista del usuario
     */
    ucfOrden: number;

}