/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface RepetLiquidaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    clvLiq: string;         // clv_liq  Clave de liquida
    clvCli: string;         // clv_cli  Clave del cliente
    clvSuc: string;         // clv_suc  Clave de sucursal
    clvBancoLiq: string;    // ban_liq  Clave del banco
    descBanco: string;      // des_ban  Descripcion del banco
    corLiq: string;         // cor_liq  
    clvDivisaLiq: string;   // div_liq  Clave de la divisa
    clvProvLiq: string;     // clp_liq  Clave del proveedor
    nomProvLiq: string;     // pro_liq  Nombre Proveedor
    sucursalLiq: number;    // suc_liq  Sucursal del banco
    plazaLiq: string;       // plz_liq  Plaza de la sucursal
    cuentaLiq: string;      // cta_liq  Cuenta del cliente
    fskLiq: string;         // fsk_liq  Fast Key
    edoLiq: string;         // edo_liq  Estatus de la liquidacion
    bitacoraLiq: string;    // bit_liq  
    tipoCuenta: string;     // tip_cta
    selLiq: boolean;

}