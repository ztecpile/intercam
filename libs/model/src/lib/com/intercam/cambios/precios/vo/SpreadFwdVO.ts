/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export interface SpreadFwdVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    tsId: number;
    mesCveMesa: number;
    insId: number;
    tppBidCompra: number;
    tppBidVenta: number;
    usuUsuario: string
    tppFecha: Date;
    tpphorario: string


    //solo se usan en la interfaz
    insNombre: string;
    //Campos Reestructura BD's
    configSpread96: number;
    configCompra96: number;
    configVenta96: number;
    configSpread72: number;
    configCompra72: number;
    configVenta72: number;
    //Campos Reestructura BD's
    configSpread48: number;
    configCompra48: number;
    configVenta48: number;

    configSpread24: number;
    configCompra24: number;
    configVenta24: number;

    configSpreadHoy: number;
    configCompraHoy: number;
    configVentaHoy: number;

    //Campos Reestructura BD's
    tppCompra96: number;
    tppVentaa96: number;
    tppCompra72: number;
    tppVentaa72: number;
    //Campos Reestructura BD's
    divId: string;

}