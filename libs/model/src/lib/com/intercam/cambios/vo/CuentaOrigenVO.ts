/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

import { ContraparteVO } from '../../corporativo/derivados/vo/ContraparteVO';
import { FormaPagoVO } from './FormaPagoVO';

export interface CuentaOrigenVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Identificador de la Cuenta Origen
     */
    corId: number;

    /**
     * Identificador de la Divisa asociada a la Cuenta Origen
     */
    divId: string;

    /**
     * Contraparte asociada a la Cuenta Origen
     */
    contraparteVO: ContraparteVO;

    /**
     * Descripcion del banco asociado a la Cuenta Origen
     */
    corBanco: string;

    /**
     * No. de Cuenta asociada a la Cuenta Origen
     * Se almacenan los ultimos 4 digitos de la cuenta
     */
    corCuenta: string;

    /**
     * Forma de pado asociada a la Cuenta Origen
     */
    formaPagoVO: FormaPagoVO;

    /**
     * Identificador del contrato al que se relaciona la Cuenta Origen
     */
    conId: number;

    /**
     * Estatus de la Cuenta Origen (AC/SU)
     */
    corEstatus: string;

    /**
     * Fecha en que se da de alta la Cuenta Origen
     */
    corFalta: Date;

    /**
     * Clave del usuario que da de alta la Cuenta Origen
     */
    usuUsuario: string;

}