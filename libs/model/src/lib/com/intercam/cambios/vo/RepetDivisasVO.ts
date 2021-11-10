/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface RepetDivisasVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    // Tabla repdivisa
    clvRep: number;             // clv_rep  Clave de repetitiva
    clvCli: string;             // clv_cli  Clave de cliente
    clvSuc: string;             // clv_suc  Clave de sucursal
    descCd: string;             // des_ciu  Descripcion de ciudad
    descBRANCH: string;         // des_brc  Descripcion del BRANCH (Oficina Bancaria)
    bancoBenef: string;         // ban_tra  Nombre del banco beneficiario
    clvBancBenef: string;       // clv_swf  Clave de SWIFT o ABA del banco beneficiario
    clvIBAN: string;            // clv_iba  Descripcion del IBAN
    codBanco: string;           // bnk_cod  Codigo del banco
    codBRANCH: string;          // brc_cof  Codigo de BRANCH (Oficina)
    numCuenta: string;          // ctb_tra  Numero de cuenta
    codDigito: string;          // dig_cod  Codigo de digito
    beneficiario: string;       // ben_tra  Beneficiario
    clvFFCredito: string;       // clv_ffc  FFCredit
    clvFCA: string;             // clv_fca  FCATention
    atencion: string;           // ant_tra  Atencion
    ordenante: string;          // byo_off  Ordenante
    clvSWIFT: string;           // clv_swi  SWIFT del banco intermediario
    numABA: string;             // num_aba  ABA del banco intermediario
    ctaBancInt: string;         // cta_int  Cuenta del banco intermediario
    descBancInt: string;        // des_bai  Nombre del banco intermediario
    clvPaisBancInt: string;     // clv_nai  Clave del pais del banco intermediario
    descPaisBancInt: string;    // des_nai  Descripcion del pais del banco intermediario
    descCdBancInt: string;      // des_cii  Descripcion de la ciudad del banco intermediario
    fechaAlta: Date;            // fechaAlt Fecha de alta de la repetitiva
    clvPais: string;            // clv_cou  Clave del pais (segun catalogo de SWIFT)
    fskRepet: string;           // fsk_rep  
    edoRepetDivisa: string;     // edo_rdi  Estado de la repetitiva de divisa
    bitacoraDivisa: string;     // bit_rdi
    selDiv: boolean;
    conceptoPago: string;

}