/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface MonitorPnLVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena el n&uacute;mero de ordenamiento del concepto.
     **/
    orden: number;

    /**
     * Almacena descripci&oacute;n del concepto.
     **/
    concepto: string;

    /**
     * Almacena la clave de divisa.
     */
    divisa: string;

    /**
     * Almacena el monto del concepto, para libro de clientes.
     **/
    montoLibroClientes: number;

    /**
     * Almacena el monto del concepto, para libro de propietario.
     **/
    montoLibroPropietario: number;

    /**
     * Almacena el monto global, para el concepto especificado.
     **/
    montoGlobalDerivados: number;

}