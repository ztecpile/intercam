/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface ValuacionFwdVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena Id Valuaci&oacute;n Forward.
     */
    vafId: number;

    /**
     * Almacena fecha de proceso.
     */
    vafFproceso: Date;

    /**
     * Almacena tipo de cambio Fix.
     */
    vafTcFix: number;

    /**
     * Almacena tasa interpolada.
     */
    vafTasaInterp: number;

    /**
     * Almacena d&iacute;as por vencer.
     */
    vafDiasPorVencer: number;

    /**
     * Almacena dias naturales por vencer.
     */
    vafDiasNatPorVencer: number;

    /**
     * Almacena flujo de mercado.
     */
    vafFlujoMercado: number;

    /**
     * Almacena valuaci&oacute;n.
     */
    vafValuacion: number;

    /**
     * Almacena valuaci&oacute;n VP.
     */
    vafValuacionVP: number;

    /**
     * Almacena valuaci&oacute;n del d&iacute;a anterior.
     */
    vafValuacionDiaAnt: number;

    /**
     * Almacena utilidad neta.
     */
    vafUtilidadNeta: number;

    /**
     * Almacena flujo pactado.
     */
    vafFlujoPactado: number;

    /**
     * Almacena Id de la operaci&oacute;n.
     */
    opeId: number;

    /**
     * Almacena tasa local.
     */
    vafTasaLocal: number;

    /**
     * Almacena tasa foranea.
     */
    vafTasaForanea: number;

    /**
     * Almacena puntos forward.
     */
    vafPtosFwd: number;

    /**
     * Almacena factor Llamada de margen.
     */
    vafFactorLlamadaMrg: number;

    /**
     * Almacena monto faltante/sobrante.
     */
    vafFaltanteSobrante: number;

    /**
     * Almacena monto garant&iacute;a inicial requerida.
     */
    vafGarantiaIniReq: number;

    /**
     * Almacena monto garant&iacute;a valuada.  
     */
    vafGarantiaValuada: number;

    /**
     * Almacena el monto de la garantia liberada
     */
    vafLiberadoaFavor: number;

    /**
     * Almacena el porcentaje de perdida que representa la operaci&oacute;n.
     */
    vafPorcPerdida: number;
    /**
     * Almacena el monto minimo para abonar en llamada de margen
     */
    vafMinimoLlamada: number;

}