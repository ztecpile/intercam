/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { AlertaStatusVO } from 'libs/model/src/lib/banco/servicios/vo/AlertaStatusVO';

export interface ConsultaEstatusPLDVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    estatus: boolean;
    mensaje: string;
    alertaStatus: Array<AlertaStatusVO>;

}