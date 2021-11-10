/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface InstrumentoVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    insId: number;
    insOrden: number;
    insNombre: string;
    insDescripcion: string;
    insEstatus: string;
    insConfigura: string;

    /**
    * Para seleccion en grid
    */
    conSelected: boolean;

}