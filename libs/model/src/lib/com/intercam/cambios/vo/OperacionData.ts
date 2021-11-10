/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { ContratoPersonaVO } from '../../corporativo/contrato/vo/ContratoPersonaVO';
import { FacturaOperacionVO } from './FacturaOperacionVO';
import { OperacionVO } from './OperacionVO';
import { TransferenciaVO } from './TransferenciaVO';

export interface OperacionData {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    opeDataId: number;
    contratoPersona: ContratoPersonaVO;
    opeId: OperacionVO;
    facOper: FacturaOperacionVO;
    transferencia: TransferenciaVO;

}