/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

import { ExcesoContraparteVO } from "./ExcesoContraparteVO"
import { GrupoVO } from "../../seguridad/vo/GrupoVO";
import { MetodoConfirmacionVO } from "./MetodoConfirmacionVO";
import { MotivoTareaVO } from "./MotivoTareaVO";
import { OperFwdVO } from "./OperFwdVO";

export interface AutTransFwdVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Almacena Id Autorizaci&oacute;n Transacci&oacute;n (Tarea).
     **/
    atfId: number;

    /**
     * Almacena clave de Usuario que registr&oacute;.
     **/
    usuUsuario: string;

    /**
     * Almacena Operaci&oacute;n Forward a la que esta relacionada la Tarea.
     **/
    operFwdVO: OperFwdVO;

    /**
     * Almacena Grupo-Rol.
     **/
    grupoVO: GrupoVO;

    /**
     * Almacena nivel de la Tarea.
     **/
    atfNivel: number;

    /**
     * Almacena fecha y hora de registro.
     **/
    atfFecha: Date;

    /**
     * Almacena observaciones acerca de la Tarea.
     **/
    atfObserva: string;

    /**
     * Almacena estatus indicado por el usuario.</br>
     * Puede tomar uno de los siguientes valores:
     * <table>
     * <tr><td>A</td><td>Autorizar</td></tr>
     * <tr><td>N</td><td>Cancelar</td></tr>
     * <tr><td>R</td><td>Rechazar</td></tr>
     * </table>
     **/
    atfAuto: string;

    /**
     * Almacena estatus en que se deja la operaci&oacute;n.
     **/
    atfEstatus: number;

    /**
     * Almacena nombre del Cliente.
     **/
    atfCliente: string;

    /**
     * Almacena fecha de confirmaci&oacute;n.
     **/
    atfFconfirma: Date;

    /**
     * Almacena monto garantia abonada.
     **/
    atfGarantiaAbonada: number;

    /**
     * Almacena motivo de la Tarea.
     **/
    motivoTareaVO: MotivoTareaVO;

    /**
     * Almacena el m&eacute;todo de confirmaci&oacute;n de la operacion.
     **/
    metodoConfirmacionVO: MetodoConfirmacionVO;

    //[ArrayElementType("com.intercam.cambios.vo.ExcesoContraparteVO")]
    /**
     * Almacena lista de excesos de Contraparte.
     **/
    excesosContraparteVO: Array<ExcesoContraparteVO>;

    /**
     * Almacena la descripcion del estatus 
     */
    estatusFwdStr: string;

    /**
     * Motivo del movimiento
     */
    motivo: string;

}