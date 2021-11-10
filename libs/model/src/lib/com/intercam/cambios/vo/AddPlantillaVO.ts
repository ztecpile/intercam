/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export interface AddPlantillaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Identificador del registro de configuracion para la Addenda
     */
    adpId: number;

    /**
     * Identificador del contrato (cliente)
     */
    conId: number;

    /**
     * Nombre o etiqueta se se presenta en la pantalla de captura para el campo de la addenda
     */
    adpEtiqueta: string;

    /**
     * Nombre o descripcion que lleva el tag asociado al campo de la addenda en el XML.
     */
    adpTag: string;

    /**
     * Orden en que se presentan los registros que conforman la configuracion de la addenda
     */
    adpOrden: number;

    /**
     * Indica si el campo configurado para la addenda es requerido o no
     */
    adpEsRequerido: boolean;

    /**
     * Expresion regular, para validar los caracteres que se pueden capturar
     */
    adpExpresion: string;

    /**
     * Longitud permutida para capturar
     */
    adpLongitud: number;

    /**
     * Indica si el registro de la addenda esta activo o no, para presentarlo en la captura.
     * AC: Activo y se presenta
     * SU: Suspendido y no se presenta (en la consulta si se presentan)
     */
    adpEstatus: string;

    /**
     * Indica el tipo de dato del registro de la addenda esta activo o no, para presentarlo en la captura.
     * AC: Activo y se presenta
     * SU: Suspendido y no se presenta (en la consulta si se presentan)
     */
    adpTipo: string;

    /**
     * Indica si la plantilla debe ser eliminada.
     **/
    eliminado: boolean;

}