/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export class PlazoForwardVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Identificador del instrumento
     **/
    public insId: number;
    /**
     * Identificador del plazo
     **/
    public idPlazo: string;
    /**
     * Indica el orden que llevan los plazos
     **/
    public plazoSecuencia: number;
    /**
     * Dias que corresponden a cada plazo por default
     **/
    public plazoDias: string;

    // ***************************************************** //
    // Cosntructor de la clase
    // ***************************************************** //
    constructor() {
        this.insId = 0;
        this.idPlazo = '';
        this.plazoSecuencia = 0;
        this.plazoDias = '';
    }

}