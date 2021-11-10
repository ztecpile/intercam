/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { CuentaBancoVO } from '../../corporativo/contrato/vo/CuentaBancoVO';
import { TransferenciaVO } from './TransferenciaVO';

export interface VendorVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena Id vendor.
     */
    venId: number;
    /**
     * Almacena Id de Cuenta.
     */
    cuentaBanco: CuentaBancoVO;
    /**
     * Almacena Id Transfer.
     */
    transferencia: TransferenciaVO;

    /**
     * Almacena nombre del Beneficiario.
     */
    venBeneficiario: string;

    /**
     * Almacena valor &uacute;nico de referencia del proveedor.
     */
    venVendor: string;

    /**
     * Indica si el Vendor debe ser eliminado.
     **/
    eliminado: boolean;

    /**
     * Indica si el Vendor esta seleccionado.
     **/
    seleccionado: boolean;

}

