/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface DevolucionSPIDVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    devNumero: number;
    devFecdev: Date;
    devFecOri: Date;
    devCuenta: string;
    devCueUSD: string;
    devNomCli: string;
    devCliDiv: string;
    devDEAL: string;
    devClaPro: string;
    devClaRas: string;
    devMonto: number;
    devMonCom: number;
    devStatus: string;
    devTipLiq: string;

    /**
     * Motivo del rechazo (cheque)
     */
    motRechazo: string;

    /**
     * Tipo de devolucion
     */
    tipoDev: string;

}