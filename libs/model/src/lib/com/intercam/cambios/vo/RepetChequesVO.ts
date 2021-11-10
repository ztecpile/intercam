/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface RepetChequesVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    claveCheque: number;
    clvCli: string; // claveCliente
    clvSuc: string; // claveSucursal
    beneficiario: string;
    fsk: number;
    estatus: string;
    bitacora: string;
    selRch: boolean;

}