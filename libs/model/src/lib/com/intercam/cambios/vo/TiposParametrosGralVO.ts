/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface TiposParametrosGralVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    mesCveMesa: number;
    tpgTcambioBase: string;
    tpgHoraNormalStr: string;
    tpgHoraCierreStr: string;
    tpgTasaForward24: number;
    tpgTasaForward0: number;
    tpgHorarioActivo: string;
    tpgFecha: Date;
    tpgPuntosCompra: number;
    tpgPuntosVenta: number;
    tpgSpreadMinimo: number;
    usuUsuario: string;
    sucSica: string;
    tpgEsquema: string;
    tpgCambioCompra: number;
    tpgCambioVenta: number;

    //No se almancena en bd;

    divId: string;
    //almacena la peticion activa de la mesa
    actionRequest: string;
    stateRequest: string;
    tpgSpreadCierre: number;
    tpgSpreadPanico: number;
    tpgDiaFordward24: number;
    tpgDiaFordward0: number;

    /**
     * Puntos REMESA compra
     */
    tpgPuntosRemesaC: number;

    /**
     * Puntos REMESA Venta
     */
    tpgPuntosRemesaV: number;

}