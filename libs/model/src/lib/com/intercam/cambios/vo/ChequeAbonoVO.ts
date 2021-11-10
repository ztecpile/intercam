/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface ChequeAbonoVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena clave de la Operaci&oacute;n.
     **/
    clvOpe: number;

    /**
     * Almacena clave de la Sucursal.
     **/
    clvSuc: string;

    /**
     * Almacena clave del Banco.
     **/
    clvBan: string;

    /**
     * Almacena CLABE de la cuenta.
     **/
    chbClabe: string;

    /**
     * Almacena nombre del beneficiario.
     **/
    chbBeneficiario: string;

    /**
     * Almacena clave de la cuenta de liquidaci&oacute;n. 
     **/
    chbCuenta: string;

    /**
     * Almacena clave de la Sucursal de liquidaci&oacute;n.
     **/
    chbSucursal: string;

    /**
     * Almacena referencia del pago.
     **/
    chbReferencia: string;

    /**
     * Almacena n&uacute;mero de primer referencia.
     **/
    chbReferencia2: string;

    /**
     * Almacena n&uacute;mero consecutivo.
     **/
    chbConsecutivo: number;

    /**
     * Almacena descripci&oacute;n corta del Banco o la Cuenta de liquidaci&oacute;n.
     **/
    chbCorLiq: string;

    /**
     * Almacena n&uacute;mero de Convenio.
     **/
    chbConvenio: string;

    /**
     * Almacena plaza del Banco de liquidaci&oacute;n.
     **/
    chbPlaza: string;

    /**
     * Almacena n&uacute;mero de Cheque. 
     */
    numChe: number;

    /**
     * Almacena monto del Cheque.
     */
    monChe: number;

}