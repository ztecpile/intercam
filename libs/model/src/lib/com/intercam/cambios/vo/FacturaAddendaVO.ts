/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { AddPlantillaVO } from './AddPlantillaVO';

export interface FacturaAddendaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena Identificador de la Addenda.
     */
    fadId: number;

    /**
     * Almacena Identificador de la Factura.
     */
    facId: number;

    /**
     * Almacena Identificador de la Plantilla.
     */
    addPlantillaVO: AddPlantillaVO;

    /**
     * Almacena valor de la Addenda.
     */
    fadValor: string;

    /**
     * Almacena valor &uacute;nico de referencia del proveedor.
     */
    fadVendor: string;

    /**
     * Almacena Identificador de la Operaci&oacute;n.</br>
     * Atributo NO Persistido, requerido para la bitacora de operaciones
     */
    opeId: number;

}