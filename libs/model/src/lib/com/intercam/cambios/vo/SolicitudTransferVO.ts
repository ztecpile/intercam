/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { DivisasVO } from '../../corporativo/contrato/vo/DivisasVO';
import { TransferenciaVO } from './TransferenciaVO';

export interface SolicitudTransferVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena Id de la Solicitud de autorizaci&oacute;n de Transfer.
     */
    strId: number;
    /**
     * Almacena el monto de la operaci&oacute;n a autorizar.
     */
    strMonto: number;
    /**
     * Almacena la fecha de solicitud.
     */
    strFechaSol: Date;
    /**
     * Almacena la fecha de registro de la solicitud.
     */
    strFechaReg: Date;
    /**
     * Almacena el estatus de la solicitud.
     */
    strEstatus: number;
    /**
     * Almacena el nombre de los documentos adjuntos.
     */
    strDoctoSoporteOp: string;
    /**
     * Almacena el usuario que realiz&oacute; la solicitud.
     */
    usuUsuario: string;
    /**
     * Almacena la Divisa de la operaci&oacute;n.
     */
    divisaVO: DivisasVO;
    /**
     * Almacena la informaci&oacute;n de la Transfer a autorizar.
     */
    transferVO: TransferenciaVO;
    /**
     * Almacena el Deal de Sica.
     */
    tmpDealSica: number;
    /**
     * Almacena la clave legada del Cliente Sica.
     */
    tmpCveClieSica: string;
    /**
     * Almacena la clave legada de la Sucursal.
     */
    tmpCveSucLegada: string;
    /**
     * Almacena la clave del Promotor.
     */
    tmpClvPro: string;
    /**
     * Almacena el nombre del Cliente.</br>
     * <i>Esta propiedad no se persiste.</i>
     */
    perNomCortoClie: string;
    /**
     * Almacena el tipo de Contrato.</br>
     * <i>Esta propiedad no se persiste.</i>
     */
    tconId: number;
    /**
     * Almacena lista de archivos codificados en <code>Base64</code>.</br>
     * <i>Esta propiedad no se persiste.</i>
     */
    fileEncoded: Array<any>;

}

