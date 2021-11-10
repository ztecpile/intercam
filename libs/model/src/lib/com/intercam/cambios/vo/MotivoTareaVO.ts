/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface MotivoTareaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Almacena Id del motivo de la Tarea.
     **/
    mtaId: number;

    /**
     * Almacena descripci&oacute;n del motivo.
     **/
    mtaDescripcion: string;

    /**
     * Almacena tipo de motivo.
     **/
    mtaTipo: string;

    /**
     * Almacena estatus del registro.
     **/
    mtaEstatus: string;

}