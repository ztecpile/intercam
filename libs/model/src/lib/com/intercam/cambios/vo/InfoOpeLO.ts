/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface InfoOpeLO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Clave legada del cliente (corporativo: tmpCveClieSica)
     */
    clvClie: string;

    /**
     * Clave o DEWAL de la operacion
     */
    clvOpe: number;

    /**
     * Tipo de operacion C:Compra / V:Venta
     */
    tipoOpe: string;

    /**
     * Tipo de instrumento
     */
    insOpe: number;

    /**
     * Tipo de pago (CatPago)
     */
    pagOpe: number;

    /**
     * Monto de la operacion en la divisa pactada
     */
    montoOperDiv: number;

    /**
     * Monto de la operacion en pesos
     */
    montoOperMN: number;

    /**
     * Monto total de los pagos realizados en la divisa pactada
     * CALCULADO
     */
    montoPagoDiv: number;

    /**
     * Monto total de los pagos realizados en pesos (MN)
     * CALCULADO
     */
    montoPagoMN: number;

    /**
     * Monto total del saldo de la linea de operacion en pesos (MN)
     * CALCULADO
     */
    montoSaldoMN: number;

    /**
     * Descripcion del Instrumento o del Tipo de Pago, dependiendo del tipo de operacion
     *      Tipo operacion = C --> Descripcion del Instrumento
     *      Tipo operacion = V --> Descripcion del Tipo de Pago
     */
    descripcion: string;

    /**
     * Monto Inicial de la Linea de operacion, al inicio de dia
     */
    montoLineaMN: number;

}