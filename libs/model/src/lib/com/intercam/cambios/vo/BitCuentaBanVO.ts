/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface BitCuentaBanVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Id de la bitacora de repetitivas
     */
    bcbId: number;

    /**
     * UsuUsuario quien realizo la operacion
     */
    usuUsuario: string;

    /**
     * Fecha del registro
     */
    bcbFecha: Date;

    /**
     * Observaciones del registro en bitacora
     */
    bcbObservaciones: string;

    /**
     * Estatus de la repetitiva
     */
    cueEstatus: string;

    /**
     * Id de la repetitiva 
     */
    cueId: number;

    /**
     * Origen de la repetitiva
     */
    bcbOrigen: string;

    /**
     * Descripcion de la operacion realizada
     */
    bcbOperacion: string;

}