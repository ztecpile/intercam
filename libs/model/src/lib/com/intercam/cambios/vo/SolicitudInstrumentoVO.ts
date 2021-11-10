/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

import { InstrumentoVO } from './InstrumentoVO';
import { OperacionVO } from './OperacionVO';
import { OperInstrumentoVO } from './OperInstrumentoVO';

export class SolicitudInstrumentoVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena Id de la solicitud de cambio de instrumento.
     */
    soiId: number;
    /**
     * Almacena la fecha de la solicitud.
     */
    soiFecha: Date;
    /**
     * Almacena la hora de atenci&oacute;n a la solicitud.
     */
    soiHora: Date;
    /**
     * Almacena operaci&oacute;n asociada a la solicitud.
     */
    operacionVO: OperacionVO;
    /**
     * Almacena operaci&oacute;n-instrumento asociada a la solicitud.
     */
    operInstrumentoVO: OperInstrumentoVO;
    /**
     * Almacena el instrumento original de la operaci&oacute;n.
     */
    instrumentoOriginalVO: InstrumentoVO;
    /**
     * Almacena el instrumento asociado a la solicitud.
     */
    instrumentoNuevoVO: InstrumentoVO;
    /**
     * Almacena clave del usuario que autoriza.
     */
    usuarioAutoriza: string;
    /**
     * Almacena estatus de la solicitud.
     * <table>
     * <tr><td>A</td><td>Autorizada</td></tr>
     * <tr><td>R</td><td>Rechazada</td></tr>
     * </table>
     */
    soiEstatus: string;
    /**
     * Almacena clave Sucursal SICA.</br>
     * Esta propiedad no se persiste.
     */
    sucSica: string;
    /**
     * Almacena descripci&oacute;n Sucursal.</br>
     * Esta propiedad no se persiste.
     */
    sucDescripcion: string;

}

