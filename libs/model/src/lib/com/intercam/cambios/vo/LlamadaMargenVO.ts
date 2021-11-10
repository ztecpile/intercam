/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface LlamadaMargenVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena Id contrato.
     */
    conId: number;

    /**
     * Almacena ceunta enlace.
     */
    cuentaEnlace: string;

    /**
     * Indica si la operaci&oacute;n se encuentra en llamada de margen.
     */
    enLlamadaMargen: boolean;

    /**
     * Almacena el monto del factor de margen, configurado en el contrato.
     */
    factorLlamadaMargen: number;

    /**
     * Almacena el monto de la garant&iacute;a inicial requerida.
     */
    garantiaIniRequerida: number;

    /**
     * Almacena el monto de la garant&iacute;a valuada.
     */
    garantiaValuada: number;

    /**
     * Almacena el monto a depositar, para cubrir la garant&iacute;a requerida.
     */
    montoDepositar: number;

    /**
     * Almacena el monto a depositar, para cubrir la garant&iacute;a requerida Real.
     */
    montoDepositarReal: number;

    /**
     * Almacena el monto de la operaci&oacute;n.
     */
    montoOperacion: number;

    /**
     * Almacena el monto de la operaci&oacute;n, en pesos (MXN).
     */
    montoOperacionPesos: number;

    /**
     * Almacena el monto de perdida autorizado, configurado en el contrato.
     */
    montoPerdidaAut: number;

    /**
     * Almacena el monto de perdida autorizado, calculado por operaci&oacute;n.
     */
    montoPerdidaOper: number;

    /**
     * Almacena el monto total vigente, en pesos (MXN).
     */
    montoTotalVigente: number;    /**
     * Almacena el Id de la operaci&oacute;n.
     */
    opeId: number;    /**
     * Almacena el porcentaje de garant&iacute;a, configurado en el contrato.
     */
    porcentajeGarantia: number;    /**
     * Indica si la operaci&oacute;n opera sin garant&iacute;a.
     */
    sinGarantia: boolean;

    /**
     * Almacena el monto del tipo de cambio.
     */
    tipoCambioCliente: number;    /**
     * Almacena el monto del tipo de cambio Fix.
     */
    tipoCambioFix: number;    /**
     * Almacena el monto de la valuaci&oacute;n de la operaci&oacute;n.
     */
    valuacionOperacion: number;

    /**
    * Almacena el monto minimo para abonar en llamada de margen
    */
    minimoLlamada: number;

}