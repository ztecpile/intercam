/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface FacturaSicaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    clvFol: number;
    desFac: string;
    edoFac: number;
    monFac: number;
    impExento: number;
    impComision: number;
    impIva: number;

    //Factura Electronica
    /**
     * Fecha de la factura.
     */
    feeFac: Date;

    /**
     * Serie de la factura.
     */
    serSerie: string;

}