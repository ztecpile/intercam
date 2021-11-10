/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface FwdRiesgosOpeVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * TC FWD Client
     */
    fiTcPactado: number;

    /**
     * Tasa local a días naturales
     * Interpolada de solicitarlo el plazo
     */
    fiTasaDescF: number;

    /**
     * Días por vencer
     */
    fiDxV: number;

    /**
     * Días por vencer valor presente
     */
    fiDNat: number;

    /**
     * Días por vencer valor presente
     */
    fiTipoOpeSpot: string;

    /**
     * Fecha a la cual se solicita la consulta de operaciones
     */
    fiFechaReporte: Date;
    fiOpeHora: Date;
    fiOpeFolio: string;
    fiOpiLibro: string;
    fiTipoDerivado: string;
    fiTipoValor: string;
    fiEmisor: string;
    fiSerie: Date;
    fiMonto: number;
    fiTipoOpe: string;
    fiTipoCambio: number;
    fiFechaRegistro: Date;
    fiPlazo: number;
    fiFechaSpot: Date;
    fiFvenci: Date;
    fiTcInicial: number;
    fiTcFinal: number;
    fiTasaLocal: number;
    fiTasaForanea: number;
    fiSubyacente: string;
    fiSubPlazo: number;
    fiNombreCliente: string;
    fiCveContraparte: string;
    fiCpeEsContraparte: boolean;
    fiTpeClave: string;
    fiContraCalif: string;
    fiTipoLiquidacion: string;
    fiGarantiaCalculada: number;
    fiGarantiaDepositada: number;
    fiMtoLineaCredito: number;
    fiGarantiaExigida: number;
    fiConsContraparte: number;
    fiClvPromotor: string;
    fiEsSimulada: string;
    fiValuacion: number;
    esContraparte: boolean;

}