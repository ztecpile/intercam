/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { FwdRiesgosOpeVO } from './FwdRiesgosOpeVO';

export interface VaRVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Indica a que tipo de categoria pertenece el valor VaR
     * portafolio, subyacente u operacion
     */
    varCategoria: string;

    /**
     * Especifica el rubro al que pertenece el calculo VaR
     * Ejemplo: SPOT, FWD, TOTAL, EUR/MXN, USD/MXN, etc.
     */
    varConcepto: string;

    /**
     * Identificador de la operacion, solo en caso de que
     * el VaR calculado sea por operacion. 
     */
    varOpeId: number;

    /**
     * Valor de mercado a valor presente en MXN
     */
    varValuacion: number;

    /**
     * Valor en Riesgo al 99% de confianza
     */
    var99: number;

    /**
     * Valor en Riesgo al 95% de confianza
     */
    var95: number;

    /**
     * Limite de Valor en Riesgo configurado
     * en MXN 
     */
    limMontoVaR: number;

    /**
     * Limite de VaR menos VaR 99% 
     */
    varDifLim99: number;

    /**
     * Limite de VaR menos VaR 95% 
     */
    varDifLim95: number;

    /**
     * VaR 99% entre Limite de VaR multiplicado por 100
     */
    varLimUtil99: number;

    /**
     * VaR 95% entre Limite de VaR multiplicado por 100 
     */
    varLimUtil95: number;

    /**
     * Subyacente solo para categoria Operacion
     */
    varSubyacente: string;

    /**
     * Objeto con los datos de la operacion
     * para el calculo del var
     */
    fwdRiesgosOpeVO: FwdRiesgosOpeVO;

    /**
    * Alamcena el deal de sica
    * */
    varDeal: number;

}