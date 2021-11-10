/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export class CtaBanVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    clvCta: number;
    clvBan: string;
    clvSuc: string;
    oriPro: string;
    clvDiv: string;
    ctaCta: string;
    sucCta: string;
    desCta: string;
    corCta: string;
    clbCta: string;
    tipOpe: string;
    insOpe: string;
    tipCta: string;
    tipCta2: string;
    staCta: string;
    tmpClvPro: string;
    opeVienevamos: string;

    /**
     * Tipo de contrato 1=C.Bolsa, 5=Banco
     */
    tconId: number;

    /**
     * Booleano que indica si el saldo de la
     * cuenta cubre el monto total de la operación
     * en pesos, solo para validaciones de SPID
     */
    saldoSuficiente: boolean;

    /**
     * Tipo de cuenta
     * Cuenta Banco / Cuenta Empresarial 
     */
    tipoCtaDes: string;


}