/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface OperacionVigenteVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Identificador de la operacion
     */
    opeId: number;

    /**
     * Tipo de operacion, C compra, V venta
     */
    opiTipo: string;

    /**
     * Consumo VAR 
     */
    opiConsumoVar: number;

    /**
     * Consumo DV01 
     */
    opiConsumoDv01: number;

    /**
     * Origen de la operacion; D divisas, F forward
     */
    orgOpe: string;

    /**
     * Monto de la operacion dolarizado
     */
    opiMonto: number;

}