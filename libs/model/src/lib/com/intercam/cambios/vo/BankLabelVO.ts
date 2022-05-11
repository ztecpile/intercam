/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export class BankLabelVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Identificador de BankLabel
     */
    blbId: number;

    /**
     * Clave del Banco SICA
     */
    blbClvBan: string;

    /**
     * Campo en sistema SICA
     */
    blbCampo: string;

    /**
     * Etiqueta con la que se presenta el campo en el sistema
     */
    blbEtiqueta: string;

    /**
     * Orden que ocupa el campo al desplegarse en pantalla
     */
    blbOrden: number;

    /**
     * Determina si el campo se valida como de ingreso requerido
     */
    blbRequerido: string;

    /**
     * Expresion que se valida en el texto, numerico, alfetico.
     */
    blbExpresionVal: string;

    /**
     * Longitud Máxima de caracteres permitidos en el campo
     */
    blbLogitud: number;

    /**
     * Estatus del campo
     */
    blbEstatus: boolean;

    /**
     * Identificador del banco en POS
     */
    banId: number;

    /**
     * Tipo A: Abono C: Convenio S:
     */
    blbTipo: string;

    /**
     * Activo campo usado en SICA
     */
    blbActivo: number;

    /**
     * Campo equivalente en POS
     */
    blbCampop: string;

    /**
    * Identificador de la divisa que maneja elbanco
    */
    divId: string;

    /**
     * Posicion del caracter inicial del campo en la cuenta clabe
     */
    blbInicioRClabe: number;

    /**
     * Longitid de caracteres del campo en la cuenta clabe
     */
    blbLongRClabe: number;
    
    //Se agrega propiedad de prueba para comportamiento de validadores
    blblTienerrores: string;

}