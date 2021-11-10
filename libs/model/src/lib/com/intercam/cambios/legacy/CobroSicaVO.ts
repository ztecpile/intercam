/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export interface CobroSicaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Indica si ya pagaron pesos
     */
    pesCob: string;
    /**
     * Quien para pesos
     */
    aupCob: string;
    /**
     * Horario para pesos
     */
    tipCob: string;
    /**
     * Indica si ya pagaron divisa
     */
    dolCob: string;
    /**
     * Indica quien para divisa
     */
    audCob: string;
    /**
     * Indica horario para divisa
     */
    tidCob: string;
    /**
     * Indica la ruta
     */
    rutCob: string;
    /**
     * Indica la descripcion de la ruta
     */
    desZon: string;
    /**
     * Indica quien para ruta
     */
    aurCob: string;
    /**
     * Indica horario para ruta
     */
    tirCob: string;
    /**
     * Indica mensajero
     */
    entCob: string;
    /**
     * Indica la descripcion del mensajero
     */
    desMen: string;
    /**
     * Indica quien para problema
     */
    autCob: string;
    /**
     * Indica horario para problema
     */
    titCob: string;
    /**
     * Indica problema del cliente
     */
    pclCob: string;
    /**
     * Indica la descripcion del problema del cliente
     */
    desPclCob: string;
    /**
     * Indica problema de intercam
     */
    pinCob: string;
    /**
     * Indica la descripcion del problema de intercam
     */
    desPinCob: string;
    /**
     * Indica las veces de la ruta
     */
    numCob: string;
    /**
     * Indica entrega
     */
    horCob: string;
    /**
    * Clave de la operacion
    */
    clvOpe: number;

}