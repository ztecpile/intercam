/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { DireccionVO } from '../../corporativo/persona/vo/DireccionVO';
import { FacturaAddendaVO } from './FacturaAddendaVO';
import { OperacionVO } from './OperacionVO';
import { UsoCfdiVO } from './UsoCfdiVO';

export class FacturaOperacionVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena Identificador de la Factura.
     */
    facId: number;

    /**
     * Almacena monto de la Operaci&oacute;n.
     */
    facMonto: number;

    /**
     * Almacena Operaci&oacute;n.
     */
    opeId: OperacionVO;

    /**
     * Almacena Identificador de la Operaci&oacute;n Instrumento.
     */
    opiId: number;

    /**
     * Almacena Direcci&oacute;n.
     */
    dirId: DireccionVO;

    /**
     * Almacena Identificador de la Persona asociada a la Factura.
     */
    perId: number;

    /**
     * Almacena identificador Viene|Vamos.
     */
    facVienevamos: string;

    /**
     * Almacena folio de la Factura.
     */
    facFolio: number;

    /**
     * Almacena fecha en la que se ingreso la Factura.
     */
    facFechaStr: string;

    /**
     * Almacena hora en la que se ingreso la Factura.
     */
    facHoraStr: string;

    /**
     * Almacena estatus de la Factura.
     */
    facEstatus: number;

    /**
     * Almacena nombre de la Persona a la que se le facturar&aacute;.
     */
    facDescrip: string;

    /**
     * Almacena n&uacute;mero consecutivo de la Factura.
     */
    facCon: number;

    /**
     * Almacena origen de la Factura.
     */
    facOri: string;

    /**
     * Almacena n&uacute;mero de Beneficiarios.
     */
    numBen: number;

    /**
     * Almacena n&uacute;mero de serie de la Factura.
     */
    facSerie: string;

    /**
     * Almacena lista de <code>FacturaAddendaVO</code> con la informaci&oacute;n
     * de los campos que conforman la Addenda.
     */
    facturaAddendasVO: Array<FacturaAddendaVO>;

    /**
     * Campo agregado que indica si la factura requiere Addenda o trae Addenda.
     */
    edoAddenda: string;

    /**
     * Uso de CFDI, correspondiente al identificador del catalogo (i00uso_cfdi)
     */
    usoCfdiVO: UsoCfdiVO;
    /**
     * Valor para facturasinfo
     */
    addenda: string;

    constructor(){
        
    }

}