/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */
import { PaisVO } from "../../corporativo/centrocostos/vo/PaisVO";
import { PersonaVO } from "../../corporativo/persona/vo/PersonaVO";

export interface ListasBlancasVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
         *identificador del registro de la lista blanca
         */
    libId: number;

    /**
     * Persona
     */
    personaVO: PersonaVO;

    /**
     * Pais
     */
    paisVO: PaisVO;

    /**
     * Estatus de la lista blanca
     */
    libEstatus: string;

    /**
     * Clave Cliente
     */
    tmpCveClieSica: string;

}