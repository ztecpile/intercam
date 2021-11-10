/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { Dv01VO } from './Dv01VO';

export interface MonitorDV01VO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    difTCNeg25: number;
    difTCNeg1: number;
    difTCNeg01: number;
    difTCPos01: number;
    difTCPos1: number;
    difTCPos25: number;
    difTasaDomNeg1: number;
    difTasaDomNeg0p1: number;
    difTasaDomNeg0p01: number;
    difTasaDomPos0p01: number;
    difTasaDomPos0p1: number;
    difTasaDomPos1: number;
    difTasaExtNeg1: number;
    difTasaExtNeg0p1: number;
    difTasaExtNeg0p01: number;
    difTasaExtPos0p01: number;
    difTasaExtPos0p1: number;
    difTasaExtPos1: number;
    exceso: boolean;

    /**
     * Lista con calculos por operacion
     */
    listaOperaciones: Array<Dv01VO>;

}