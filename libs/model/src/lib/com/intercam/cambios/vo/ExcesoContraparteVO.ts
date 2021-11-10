/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { LimiteContraparteVO } from './LimiteContraparteVO';

export interface ExcesoContraparteVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena Id del exceso al l&iacute;mite de contrapartes.
     */
    excId: number;

    /**
     * Almacena Id de Autorizaci&oacute;n de la Transacci&oacute;n.
     */
    atfId: number;

    /**
     * Almacena l&iacute;mite de Contrapartes.
     */
    limiteContraparteVO: LimiteContraparteVO;

    /**
     * Almacena Id del l&iacute;mite.
     */
    limId: number;

    /**
     * Almacena monto del l&iacute;mite.
     */
    excLimite: number;

    /**
     * Almacena monto del saldo.
     */
    excSaldo: number;

    /**
     * Almacena monto del valor requerido. 
     */
    excValorReq: number;

}