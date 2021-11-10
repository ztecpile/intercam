/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

import { PaisVO } from "../../corporativo/centrocostos/vo/PaisVO";
import { PersonaVO } from "../../corporativo/persona/vo/PersonaVO";
import { TipoExcepcionVO } from './TipoExcepcionVO';



export interface ClienteExentoVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * 
     */
    cexId: number;

    /**
     *
     */
    cexEstatus: string;

    /**
     *
     */
    personaVO: PersonaVO;

    /**
     *
     */
    tmpCveClieSica: string;

    /**
     *
     */
    paisVO: PaisVO;

    /**
     *
     */
    tipoExcepcionVO: TipoExcepcionVO;

}