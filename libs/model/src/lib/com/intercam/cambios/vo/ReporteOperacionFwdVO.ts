/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface ReporteOperacionFwdVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena la clave legada del Cliente.
     */
    cveCliente: string;

    /**
     * Almacena el nombre del Cliente.
     */
    nomCliente: string;

    /**
     * Almacena la clave legada de la Sucursal.
     */
    cveSucursal: string;

    /**
     * Almacena Id de la Operaci&oacute;n.
     */
    opeId: number;

    /**
     * Almacena Id Padre de la Operaci&oacute;n.
     */
    opeIdPadre: number;

    /**
     * Almacena tipo de operaci&oacute;n.
     */
    tipoOperacion: string;

    /**
     * Almacena clave de la Divisa.
     */
    divisa: string;

    /**
     * Almacena monto de la operaci&oacute;n.
     */
    montoOperacion: number;

    /**
     * Almacena tipo de cambio.
     */
    tipoCambio: number;

    /**
     * Almacena tipo cambio Spot.
     */
    tipoCambioSpot: number;

    /**
     * Almacena tipo costo.
     */
    tipoCosto: number;

    /**
     * Almacena fecha de registro.
     */
    fechaRegistro: Date;

    /**
     * Almacena fecha de registro.
     */
    fechaRegistroStr: string;

    /**
     * Almacena fecha de vencimiento.
     */
    fechaVencimiento: Date;

    /**
     * Almacena fecha de vencimiento.
     */
    fechaVencimientoStr: string;

    /**
     * Almacena puntos forward.
     */
    puntosFwd: number;

    /**
     * Almacena el estatus de la operaci&oacute;n forward.
     */
    estatusFwd: number;

    /**
     * Almacena descripci&oacute;n del estatus de la operaci&oacute;n forward.
     */
    estatusFwdStr: string;

    /**
     * Indica si el Cliente opera sin garant&iacute;a.
     */
    operaSinGarantia: string;

    /**
     * Almacena el factor de llamada de margen especificado en el contrato.
     */
    factorLlamada: number;

    /**
     * Almacena el monto del l&iacute;mite operativo.
     */
    limOperativo: number;

    /**
     * Almacena el monto del l&iacute;mite disponible.
     */
    limDisponible: number;

    /**
     * Almacena el porcentaje de garant&iacute;a especificado en el contrato.
     */
    porcentajeGarantia: number;

    /**
     * Almacena el monto de perdida autorizado especificado en el contrato.
     */
    montoPerdida: number;

    /**
     * Almacena el monto de la garant&iacute;a valuada.
     */
    garantiaValuada: number;

    /**
     * Almacena el monto de la garant&iacute;a inicial.
     */
    garantiaInicial: number;

    /**
     * Almacena el monto de la valuaci&oacute;n
     */
    valuacion: number;

    /**
     * Almacena el monto del condicionante de llamada de margen.
     */
    condicionanteLlamada: number;

    /**
     * Almacena el monto del resultado de cierre.
     */
    resultadoCierre: number;

    /**
     * Indica si la operaci&oacute;n esta en llamada de margen.
     */
    enLlamada: string;

    /**
     * Almacena el monto a depositar.
     */
    montoDepositar: number;

    /**
     * Monto de la Operación en dolares
     */
    montoDolarizado: number;
    montoPactadoPesos: number;
    garantiaTotal: number;
    tcFix: number;

    /**
     * Almacena el monto a depositar Real, contiene
     * el faltante sobrante previo al prorrateo que se hace
     * cuando esta en llamada de margen.
     */
    montoDepositarReal: number;

    /**
     * Almacena el nombre del Promotor.
     */
    nomPromotor: string;

    /**
     * Almacena el nombre del Enlace.
     */
    nomEnlace: string;

}