/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface TipoRouVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    mesCveMesa: number;
    fecTirStr: Date;
    clvSuc: string;
    clvDiv: string;
    c04Tir: number;
    v04Tir: number;
    tcoTir: number;
    tveTir: number;

    //solo se usan en la interfaz
    operador: string;

    cambio: string;

}