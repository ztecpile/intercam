/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface TotalOpeTipoOrigenVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Origen de la operacion
     */
    tipoOpe: string;

    /**
     * Tipo de operacion X = ventanilla, I = Intercuenta, T = Total de operaciones
     */
    totalOpe: number;

}