/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface TiposParametrosVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    mesCveMesa: number;
    insId: number;
    tppBidCompra: number;
    tppBidVenta: number;
    usuUsuario: string
    tppFecha: Date;
    tpphorario: string


    //solo se usan en la interfaz
    insNombre: string;

    configSpread48: number;
    configCompra48: number;
    configVenta48: number;
    configSpread24: number;
    configCompra24: number;
    configVenta24: number;
    configSpreadHoy: number;
    configCompraHoy: number;
    configVentaHoy: number;

    tppCompra48: number;
    tppVenta48: number;
    tppCompra24: number;
    tppVenta24: number;
    tppCompra0: number;
    tppVenta0: number;
    tppCompraPrecioMtz: number;
    tppVentaPrecioMtz: number;
    divId: string;

}