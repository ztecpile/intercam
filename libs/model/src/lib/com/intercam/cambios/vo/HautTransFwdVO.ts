/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { AutTransFwdVO } from './AutTransFwdVO';
import { GrupoVO } from "../../seguridad/vo/GrupoVO";
import { MetodoConfirmacionVO } from './MetodoConfirmacionVO';
import { MotivoTareaVO } from './MotivoTareaVO';

export interface HautTransFwdVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena Id historico Autorizaci&oacute;n Transacci&oacute;n.
     **/
    hatfId: number;

    /**
     * Almacena clave de Usuario que registr&oacute;.
     **/
    usuUsuario: string;

    /**
     * Almacena Autorizaci&oacute;n Transacci&oacute;n a la que esta relacionado
     * este registro historico.
     **/
    autTransFwdVO: AutTransFwdVO;

    /**
     * Almacena Grupo-Rol.
     **/
    grupoVO: GrupoVO;

    /**
     * Almacena nivel de la Tarea.
     **/
    hatfNivel: number;

    /**
     * Almacena fecha y hora de registro.
     **/
    hatfFecha: Date;

    /**
     * Almacena fecha y hora de registro, en formato String.
     **/
    hatfFechaStr: string;

    /**
     * Almacena observaciones acerca de la Tarea.
     **/
    hatfObserva: string;

    /**
     * Almacena estatus indicado por el usuario.</br>
     * Puede tomar uno de los siguientes valores:
     * <table>
     * <tr><td>A</td><td>Autorizar</td></tr>
     * <tr><td>N</td><td>Cancelar</td></tr>
     * <tr><td>R</td><td>Rechazar</td></tr>
     * </table>
     **/
    hatfAuto: string;

    /**
     * Almacena estatus en que se deja la operaci&oacute;n.
     **/
    hatfEstatus: number;

    /**
     * Almacena nombre del Cliente.
     **/
    hatfClienteConf: string;

    /**
     * Almacena fecha de confirmaci&oacute;n.
     **/
    hatfFconfirma: Date;

    /**
     * Almacena monto garantia abonada.
     **/
    hatfGarantiaAbonada: number;

    /**
     * Almacena motivo de la Tarea.
     **/
    motivoTareaVO: MotivoTareaVO;

    /**
     * Almacena el m&eacute;todo de confirmaci&oacute;n.
     */
    metodoConfirmacionVO: MetodoConfirmacionVO;

}