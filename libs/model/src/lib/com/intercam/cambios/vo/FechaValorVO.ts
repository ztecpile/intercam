/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { FechaValorIdVO } from './FechaValorIdVO';

export interface FechaValorVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    idVO: FechaValorIdVO;
    fvaDescripcion: string;
    tmpCvelegada: string;

    /**
    * Fecha correspondiente a la fecha valor
    * Variable no mapeada a la base de datos
    **/
    fvaFechaStr: string;

    /**
    * Numero de dias correspondiente a la fecha valor (0, 1, 2, ...)
    * Variable no mapeada a la base de datos
    */
    fvaDias: number;

    /**
     * Indica si la fecha vencimiento es hábil o no en Estados Unidos, se utiliza un valor numérico para evitar hacer
     *    "IF's" ya que este valor se utiliza para multiplicar los tipos de costo y precentar Ceros cuando no se
     *    opera en Estados Unidos.
     *      1: si es hábil
     *      0: No es habil.
     *
     * Esta variable no esta mapeadas a la base de datos y se llena como parte del proceso que establece la
     * informacion referente al día habil a operar y deja en memoria el objeto InfoFechaHabilVO
     */
    fvaHabilEU: number;

}