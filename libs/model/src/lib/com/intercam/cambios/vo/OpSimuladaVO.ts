/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface OpSimuladaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    opeId: number;
    mtoNocional: number;
    tcfwdCliente: number;
    tcSpot: number;
    plazo: number;
    puntosFwd: number;
    subyacenteG: string;
    isSimulado: boolean;
    fwdId: number;

}