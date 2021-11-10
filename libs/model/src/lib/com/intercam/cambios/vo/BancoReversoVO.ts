/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

import { CatLiquidaRevVO } from './CatLiquidaRevVO';
import { CausaReversoVO } from './CausaReversoVO';
import { DivisasVO } from "../../corporativo/contrato/vo/DivisasVO";
import { InstrumentoVO } from './InstrumentoVO';

export interface BancoReversoVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Identificador del registro de Bancos del Reverso
     */
    barId: number;

    /**
     * Tipo de operacion (C/V)
     */
    opiTipo: string;

    /**
     * Instrumento asociado a los Bancos del Reverso
     */
    instrumentoVO: InstrumentoVO;

    /**
     * Divisa asociada a los Bancos del Reverso
     */
    divisasVO: DivisasVO;

    /**
     * Tipo de liquidacion asociada a los Bancos del Reverso
     */
    catLiquidaRevVO: CatLiquidaRevVO;

    /**
     * Causa del reverso asociada a los Bancos del Reverso
     */
    causaReversoVO: CausaReversoVO;

    /**
     * Marca que indica si Intercam ya Recibio el pago o no (Intercam Cobro)
     *      V: Intercam YA ha recibido el pago (Intercam ya cobro)
     *      F: Intercam NO ha recibido el pago (Intercam no ha cobrado)
     *      null: No importa si Intercam ya recibio o no el pago
     */
    barRecibio: string;

    /**
     * Marca que indica si Intercam ya Entrego el pago o no (Cliente Cobro)
     *      V: Intercam YA ha entregado el pago (Cliente ya cobro)
     *      F: Intercam NO ha entregado el pago (Cliente no ha cobrado)
     *      null: No importa si el Cliente ya cobro o no el pago
     */
    barEntrego: string;

    /**
     * Banco en Divisa definido para la operacion Original
     */
    barBanDivOrigi: string;

    /**
     * Banco en MN definido para la operacion Original
     */
    barBanMnOrigi: string;

    /**
     * Banco en Divisa definido para la operacion Reversa
     */
    barBanDivReva: string;

    /**
     * Banco en MN definido para la operacion Reversa
     */
    barBanMnReva: string;

    /**
     * Banco en Divisa definido para la operacion Sustituta
     */
    barBanDivSust: string;

    /**
     * Banco en MN definido para la operacion Sustituta
     */
    barBanMnSust: string;

    /**
     * Fecha de registro
     */
    barFechaStr: string;

    /**
     * Usuarios que registran y modifican el registro (usuUsuario's)
     */
    barUsuarios: string;

    /**
     * Estatus del registro
     */
    barEstatus: string;

    /**
     * Indica cuando aplica la regla de los bancos en funcion a la fecha de registro de la
     *  operacion que se va a reversar
     *  1. Operaciones Mismo dia
     *  2. Operaciones Dias Anteriores
     *  3. Operaciones Mismo dia y dia anteriores
     */
    barAplicaDia: number;

}