/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { IbanFieldIdVO } from './IbanFieldIdVO';

export interface IbanFieldVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    idVO: IbanFieldIdVO;
    fieOrden: number;
    fieEtiqueta: string;
    fieInicio: number;
    fieLongitud: number;
    fieExpresionValida: string;

    /**
     * Indica si el campo es obligatorio.
     */
    fieRequerido: boolean;

}