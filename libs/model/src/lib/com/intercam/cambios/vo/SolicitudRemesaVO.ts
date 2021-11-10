/*
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 *
 * Solicitudes de Remesas sin DEAL
*/

import { SucursalCorresponsalVO } from '@intercam/model';
import { PaisVO } from '../../corporativo/centrocostos/vo/PaisVO';
import { DivisasVO } from '../../corporativo/contrato/vo/DivisasVO';
import { ExpedienteVO } from '../../corporativo/documentos/vo/ExpedienteVO';
import { InstrumentoVO } from './InstrumentoVO';
import { LargeItemAppVO } from './LargeItemAppVO';
import { MotivoRemesaVO } from './MotivoRemesaVO';
import { OperacionVO } from './OperacionVO';
import { PagoOperacionVO } from './PagoOperacionVO';



export interface SolicitudRemesaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * |Identificador de la solicitud de remesa
     */
    sreId: number;

    /**
     * Clave legada del Cliente
     */
    tmpCveClieSica: string;

    /**
     * Clave legada de la sucursal a la que pertenece el cliente
     */
    tmpCveSucLegada: string;

    /**
     * Clave legada del promotor dueño del cliente
     */
    tmpClvPro: string;

    /**
     * DEAL de la operacion asociada la solicitud de remesa
     */
    tmpDealsica: number;

    /**
     * Ubicacion y nombre del documento con la imagen frontal del cheque
     */
    sreCheque1: string;

    /**
     * Ubicacion y nombre del documento con la imagen adversa del cheque
     */
    sreCheque2: string;

    /**
     * Informacion del expediente relacionado con la identificacion del cliente asociada a la solicitud
     */
    expedienteVO: ExpedienteVO;

    /**
     * Fecha de alta de la solicitud (Fecha habil a operar) con formato de cadena
     */
    sreFechaSolStr: string;

    /**
     * Fecha de registro de la solicitud (Fecha del servidor) con formato de cadena
     */
    sreFechaRegStr: string;

    /**
     * Divisa asociada a la remesa
     */
    divisasVO: DivisasVO;

    /**
     * Intrumento (Remesa)
     */
    instrumentoVO: InstrumentoVO;

    /**
     * Tipo de costo pactado
     */
    sreTcosto: number;

    /**
     * tipo de contrato al que se asocia la solicitud de remesa
     */
    tconId: number;

    /**
     * Estatus de la solicitud
     */
    sreEstatus: number;

    /**
     * Clave ABA
     */
    sreAba: string;

    /**
     * Nombre del banco
     */
    sreBanco: string;

    /**
     * Ciudad del banco
     */
    sreCdBanco: string;

    /**
     * Nombre del beneficiario del cheque
     */
    sreBeneficiario: string;

    /**
     * Numero de cheque
     */
    sreNumCheque: string;

    /**
     * Fecha del cheque en formato de cadena
     */
    sreFechaCheqStr: string;

    /**
     * Cuenta
     */
    sreCuenta: string;

    /**
     * Nombre del girador
     */
    sreGirador: string;

    /**
     * Monto
     */
    sreMonto: number;

    /**
     * Observaciones
     */
    sreObservaciones: string;

    /**
     * Clave del usuario que registra la solicitud
     */
    usuUsuario: string;

    /**
     * Motivo de la remesa
     */
    motivoRemesaVO: MotivoRemesaVO;

    /**
     * Informacion del documento: Large Item Approval
     */
    largeItemAppVO: LargeItemAppVO;

    /**
     * Almacena informaci&oacute;n Sucursal-Corresponsal.
     */
    sucursalCorresponsalVO: SucursalCorresponsalVO;

    /**
     * Identificador del cheque en SICA,
     *      correspondiente al campo clv_che de la tabla cheaut de SICA
     * Este campo se debe eliminar al finalizar la migracion de SICA a POS
     */
    sreClvChe: number;

    /**
     * Identificador del documento en SICA,
     *      correspondiente al campo sec_doc de la tabla documen de SICA
     * Este campo se debe eliminar al finalizar la migracion de SICA a POS
     */
    sreSeqDoc: number;

    /**
     * Clave de la mesa asociada al promotor dueño del cliente
     * Campo no persistido en base de datos
     */
    clvMesa: number;

    /**
     * Identificador del contrato del cliente
     * Campo no persistido en base de datos
     */
    conId: number;

    /**
     * Pais asociado al ABA
     * Campo no persistido en BD
     */
    paisVO: PaisVO;

    /**
     * Informacion de la remesa que se almacena en SICA
     * Campo no persistido en BD
     * Eliminarse cuando se termina la migracion de SICA a "POS"
     */
    operacionVO: OperacionVO;

    /**
     * Informacion de la remesa que se almacena en SICA
     * Campo no persistido en BD
     * Eliminarse cuando se termina la migracion de SICA a "POS"
     */
    pagoOperacionVO: PagoOperacionVO;

}