/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export interface TipoTasaFwdVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Almacena Identificador del spread.
     **/
    tfwId: number;

    /**
     * Almacena Identificador del esquema al que perteneces.
     **/
    teId: number;

    /**
     * Almacena Identificador de la fecha valor.
     **/
    fvaId: number;

    /**
     * Almacena Tasa forward.
     **/
    tfTasaFwd: number;

    /**
     * Almacena Numero de dias forward.
     **/
    tfDiaFwd: number;

    /**
     * Almacena Numero de puntos o spread forward.
     **/
    tfPuntosFwd: number;
}