/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface RepetCashVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    // Tabla cashreps
    clvRep: number;             // clv_rep  Numero Consecutivo
    clvSuc: string;             // clv_suc  Clave de Sucursal
    clvCli: string;             // clv_cli  Clave de cliente
    casTarjeta: string;         // cas_tja  Tarjeta
    casNumAdi: number;          // cas_adi  Numero de adicionales
    casNombreAdi: string;       // cas_par  Nombre de adicional
    casAuditoria: string;       // cas_aud  Auditoria
    casNombre: string;          // cas_nom  Nombre
    casTitulo: string;          // cas_tit  Titulo
    casSufijo: string;          // cas_suf  Sufijo
    casInicial: string;         // cas_ini  Inicial
    fechAnivCliStr: string;     // fan_cli  Fecha de aniversario del cliente
    casNomMama: string;         // cas_nsm  Nombre de soltera de la madre
    casIdentOficial: string;    // cas_idc  Identificacion Oficial
    casNumIdentif: string;      // cas_nid  Numero de identificacion
    casTargEntregada: string;   // cas_ent  Bandera de Tarjeta Entregada
    casActualiza: string;       // cas_act  Bandera de Actualizacion
    empresaCli: string;         // empl_cli Empresa
    nombreCli: string;          // nom_cli  Nombre
    apPatCli: string;           // app_cli  Apellido Paterno
    apMatCli: string;           // apm_cli  Apellido Materno
    calleCli: string;           // cll_cli  Calle
    coloniaCli: string;         // col_cli  Colonia
    delCli: string;             // del_cli  Delegacion
    cpCli: string;              // cpo_cli  Codigo Postal
    cdCli: string;              // ciu_cli  Ciudad
    entFedCli: string;          // efe_cli  Entidad
    telCli: string;             // te1_cli  Telefono 1
    telCelCli: string;          // te2_cli  Telefono Celular
    mailCli: string;            // mail_cli Correo Electronico del cliente
    tjaTit: string;             // tja_tit  Marca de impresion
    statusTarjeta: string;      // sta_tja  Status de Activo (0=Inactivo, 1=Activo)
    selCli: boolean;

}