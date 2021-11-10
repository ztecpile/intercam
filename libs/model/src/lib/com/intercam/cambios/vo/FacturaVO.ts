/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface FacturaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena Id factura.
     **/
    id: number;

    /**
     * Almacena nombre Cliente.
     **/
    nombre: string;

    /**
     * Almacena concepto de la factura.
     **/
    descripcion: string;

    /**
     * Almacena monto de la factura.
     **/
    monto: number;

    /**
     * Almacena Id instrumento.
     **/
    instrumento: number;

    /**
     * Almacena contra partida.
     **/
    contraPartida: number;

}