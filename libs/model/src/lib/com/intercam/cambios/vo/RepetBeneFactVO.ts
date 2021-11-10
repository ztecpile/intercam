/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface RepetBeneFactVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    // Tabla benfac
    clvSuc: string;         // clv_suc  Clave sucursal
    clvCli: string;         // clv_cli  Clave de cliente
    numBenef: number;       // num_ben  Numero de beneficiario
    tipoBenef: string;      // tip_ben  Tipo de Beneficiario
    nombreBenef: string;    // nom_ben  Nombre del benenficiario
    tel1Benef: string;      // te1_ben  Telefono 1 del beneficiario
    tel2Benef: string;      // te2_ben  Telefono 2 del beneficiario
    faxBenef: string;       // fax_ben  Fax
    descCdBenef: string;    // des_ciu  Ciudad
    calleBenef: string;     // cll_ben  Calle
    colBenef: string;       // col_ben  Colonia
    delBenef: string;       // del_ben  Delegacion
    rfcBenef: string;       // rfc_ben  RFC
    selBenf: boolean;
    perId: number;          //per_id del tercero
}
