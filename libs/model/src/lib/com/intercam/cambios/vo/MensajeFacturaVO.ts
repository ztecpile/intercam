/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { CompaniaVO } from './CompaniaVO';

export interface MensajeFacturaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Identificador de mensaje fectura
     */
    mefId: number;

    /**
    * La compania a la que pertenece el menmsaje
    * */
    companiaVO: CompaniaVO;

    /**
    * Tipo de factura A administrativo, D divisas
    * */
    mefTipo: string;

    /**
     * Mensaje de la factura
     */
    mefMensaje: string;

    /**
     * Usuario que crea mensaje para factura electronica
     */
    mefUsarioAlta: string;

    /**
     * fecha de creacion del mensaje
     */
    mefFalta: Date;

    /**
     * Estatus del mensaje
     */
    mefEstatus: boolean;

    /**
     * Usuarion que actualiza mensaje
     */
    mefUsuarioMod: string;

    /**
     * fecha de modificacion de estatus
     */
    mefFechaMod: Date;

}