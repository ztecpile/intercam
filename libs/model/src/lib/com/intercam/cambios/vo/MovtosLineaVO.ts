/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { CatPagoVO } from './CatPagoVO';
import { InstrumentoVO } from './InstrumentoVO';

export interface MovtosLineaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Identificador del movimiento de la linea
     */
    mvlId: number;

    /**
     * fecha de movimiento de linea
     */
    mvlFechaStr: string;

    /**
     * Monto operado
     */
    mvlMontoOperado: number;

    /**
     * Monto pagado
     */
    mvlPagos: number;

    /**
     * Saldo al cierre
     */
    mvlSaldoCierre: number;

    /**
     * Identificador del contrato
     */
    conId: number;

    /**
     * Tipo de operacion, C compra, V venta
     */
    opiTipo: string;

    /**
     * Instrumento de la operacion
     */
    insIdVO: InstrumentoVO;

    /**
     * Tipo de pago
     */
    catPagoVO: CatPagoVO;

}