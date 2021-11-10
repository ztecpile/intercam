/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface CargoPendienteVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Almacena n&uacute;mero de Cuenta.
     */
    numCuenta: string;

    /**
     * Almacena descripci&oacute;n del cargo. 
     */
    descripcion: string;

    /**
     * Almacena la fecha del cargo.
     */
    fecha: string;

    /**
     * Almacena el monto del cargo.
     */
    monto: number;

    /**
     * Almacena la referencia del cargo.
     */
    referencia: string;

    /**
     * Almacena el estatus del cargo.
     */
    estatus: string;

    /**
     * Almacena identificador de la transacci&oacute;n. 
     */
    transaccion: string;

    /**
     * Alamcen el opeid
     */
    capNumPro: string;

}