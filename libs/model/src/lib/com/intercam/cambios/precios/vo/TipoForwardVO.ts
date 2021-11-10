/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export class TipoForwardVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Identificador de la mesa
     **/
    cveMesa: number;

    /**
     * Identificador de la divisa
     **/
    divId: string;

    /**
     * Identificador del Instrumento
     **/
    insId: number;

    /**
     * Numero de dias correspondientes al plazo
     **/
    plazoDias: number;

    /**
     * Fecha de registro del tipo de cambio
     **/
    tfFecha: Date;

    /**
     * Puntos forward para compra
     **/
    tfPtoCompra: number;

    /**
     * Puntos forward para venta
     **/
    tfPtoVenta: number;

    /**
     * Tipo de cambio Forward Compra
     **/
    tfTcCompra: number;

    /**
     * Tipo de cambio forward Venta
     **/
    tfTcVenta: number;

    /**
     * Identificador del plazo base forward (ejem. 1M),
     * unicamente para fines de su uso en flex,
     * para el resto el default sera ALL
     */
    idPlazo: string;

    /**
     * Puntos forward compra Originales
     * de Reuters sin spread mesa
     * solo para su uso en flex
     */
    tfPtoCompraOrg: number;

    /**
     * Puntos forward venta Originales
     * de Reuters sin spread mesa
     * solo para su uso en flex
     */
    tfPtoVentaOrg: number;

    /**
    * Descripcion del tipo de operacion que se esta realizando Compara o Venta
    * Propiedad no persistida para facilitar la funcionalidad de la informacion
    **/
    opiTipo: string;

    /**
     * Valor del SPOT para la VENTA
     * Valor no persistido
     **/
    spotVenta: number;

    /**
     * Valor del SPOT para la COMPRA)
     * Valor no persistido
     **/
    spotCompra: number;

    /**
     * Tasa domestica implicita Venta
     * Valor no persistido por solo presentarse
     * en la calculadora
     */
    tfTdiCompra: number;

    /**
     * Tasa domestica implicita Venta
     * Valor no persistido por solo presentarse
     * en la calculadora
     */
    tfTdiVenta: number;

    /**
     * Middle Price de los puntos forward
     * Valor no persistido por solo presentarse
     * en la calculadora     
     */
    tfMidPtosFwd: number;

    /**
     * Middle Price del tipo cambio forward
     * Valor no persistido por solo presentarse
     * en la calculadora     
     */
    tfMidTipoFwd: number;

    /**
     * Middle Price de la tasa domestica implicita
     * Valor no persistido por solo presentarse
     * en la calculadora     
     */
    tfMidTdi: number;

    /**
     * Indica el orden que llevan los plazos, no se relaciona dire
     **/
    plazoSecuencia: number;

    // ***************************************************** //
    //  Constructor de la clase
    // ***************************************************** //
    constructor() {
        this.cveMesa = 0;
        this.divId = '';
        this.insId = 0;
        this.plazoDias = 0;
        this.tfFecha = null;
        this.tfPtoCompra = 0;
        this.tfPtoVenta = 0;
        this.tfTcCompra = 0;
        this.tfTcVenta = 0;
        this.idPlazo = '';
        this.tfPtoCompraOrg = 0;
        this.tfPtoVentaOrg = 0;
    }

}