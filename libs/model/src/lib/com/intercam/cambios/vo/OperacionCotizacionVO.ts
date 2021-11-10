/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

import { TipoPersonaVO } from '../../corporativo/persona/vo/TipoPersonaVO';
import { ActividadEconomicaVO } from '../../corporativo/persona/vo/ActividadEconomicaVO';
import { ProfesionVO } from '../../corporativo/persona/vo/ProfesionVO';
import { NegociosClienteProspectoVO } from '../../corporativo/prospeccion/vo/NegociosClienteProspectoVO';

export interface OperacionCotizacionVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena Nombre Corto Persona Prospecto.
     **/
    perNomCorto: string;

    /**
     * Almacena Nombre Comercial Persona Prospecto.
     **/
    perNomComercial: string;

    /**
     * Almacena R.F.C. persona Prospecto.
     **/
    perRfc: string;

    /**
     * Almacena Tipo Solicitud Referenciado o referido
     **/
    tipSolicitud: string;

    /**
     * Almacena Id Persona prospecto.
     **/
    perId: number;

    /**
     *  Almacena el ejecutivo dueño 
     **/
    idEjeDueno: number;

    /**
     * Almacena Tipo de Persona.
     **/
    tpoPersona: string;

    /**
     * Almacena Fecha de alta.
     **/
    fechaAlta: Date;

    /**
     * Almacena Fecha de ultima Operacion.
     **/
    fechaUltimaOp: string;

    /**
     * Almacena los negocios del cliente
     */
    negocios: Array<NegociosClienteProspectoVO>;

    /**
     * Determina si el cliente es o no extranjero(N=nacional, E=Extranjero)
     */
    esExtranjero: string;

    /**
     * Determina si el cliente ya cuenta con el documento FATCA (NO, SI)
     */
    docFatca: boolean;

    /**
     * Cuando la solicitud es:
     * CR Almacena el perId del Ejecutivo al que le fue enviada la solicitud para prospectar una cliente
     * RC Almacena el perId del Ejecutivo que tomo el cliente de alguien mas, para ser prospectado
     */
    perIdSolicita: number;

    /**
     * Cuando la solicitud es:
     * CR Almacena el perId del Ejecutivo dueño del cliente, el cual es el que esta enviando la solicitud
     * RC Almacena el perId del Ejecutivo dueño del cliente tomado para ser prospectado
     */
    perIdDueno: number;
    cpeId: number;  //categoria
    tipoPersonaVO: TipoPersonaVO; // tpe_clave    
    actividadVO: ActividadEconomicaVO;
    pemFconstitucionStr: string;
    pefFNacimientoStr: string;
    paiClaveResidencia: number;
    profesionVO: ProfesionVO;
    isPep: string;

    /**
     *es Relpep
     **/
    isRelPep: string;

    /**
     * Pais de nacimiento
     **/
    paiClave: number;

    /**
     * Bandera semaforo Riesgo
     **/
    banderaSemaforo: boolean;

}