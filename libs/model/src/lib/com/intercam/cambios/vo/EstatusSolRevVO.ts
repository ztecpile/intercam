/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 *
 * Catalogo de Estatus de Solicitud de Reversos o Recompras
 * 
 * @see com.intercam.cambios.vo.EstatusSolRevVO.java
*/

export interface EstatusSolRevVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
         * Identificador del Estatus de la Solicitud de Reverso/Recompra
         */
    esrId: number;

    /**
     * Clave del Estatus de la Solicitud de Reverso/Recompra
     *      SM: Solicitud Mesa
     *      AM: Autorizo Mesa
     *      RM: Rechazo Mesa
     *      ST: Solicitud Tesorer�a
     *      AT: Autorizo Tesorer�a
     *      RT: Rechazo Tesoreria
     *      AP: Aplicado
     *      CA: Cancelado
     */
    esrClave: string;

    /**
     * Descripcion del Estatus de la Solicitud de Reverso/Recompra
     *      Solicitud Mesa (SM)
     *      Autorizo Mesa (AM)
     *      Rechazo Mesa (RM)
     *      Solicitud Tesorer�a (ST)
     *      Autorizo Tesorer�a (AT)
     *      Rechazo Tesoreria (RT)
     *      Aplicado (AP)
     *      Cancelado (CA)
     */
    esrDescripcion: string;

    /**
     * Estatus del registro
     *      AC: Activo
     *      SU: Susupendido
     */
    esrEstatus: string;

}