/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface HOperFwdVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena Id historico Operaci&oacute;n Forward.
     */
    hfwdId: number;

    /**
     * Almacena monto de la garant&iacute;a.
     */
    hfwdGarantia: number;

    /**
     * Almacena Id de la operaci&oacute;n forward.
     */
    fwdId: number;

    /**
     * Almacena estatus de la operaci&oacute;n.
     */
    fwdEstatus: number;

    /**
     * Almacena fecha de la generaci&oacute;n del reporte.
     */
    hfwdFecha: Date;

    /**
     * Almacena el comentario del monitor de llamada de margen.
     */
    hfwdNegociacte: string;

    /**
     * Almacena el tipo de movimiento 
     * C = cargo a garantias sibamex
     * A = abono a garantias sibamex
     * V = llamado al proceso de vencimiento sibamex
     */
    hfwdTipoMovto: string;

    /**
     * Almacena la descripcion del estatus 
     */
    estatusStr: string;

    /**
     * Almacena el usuario
     */
    usuUsuario: string;

}