/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { ContratoPersonaVO } from "../../corporativo/contrato/vo/ContratoPersonaVO";
import { DireccionVO } from "../../corporativo/persona/vo/DireccionVO";
import { PersonaVO } from "../../corporativo/persona/vo/PersonaVO";
import { RelacionPersonaVO } from "../../corporativo/persona/vo/RelacionPersonaVO";
import { TelefonoVO } from "../../corporativo/persona/vo/TelefonoVO";

export interface RepetitivaPersonaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    personaVO: PersonaVO;
    relacionPersonaVO: RelacionPersonaVO;
    contratoPersonaVO: ContratoPersonaVO;
    telefonoVOs: Array<TelefonoVO>; //List<TelefonoVO>
    direccionVO: DireccionVO;
    tipoPersonaFisica: boolean;

}