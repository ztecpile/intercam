/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface ColumnaGridFwdVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Header de la columna
     */
    etiqueta: string;

    /**
     * datafield de la coluna
     */
    dataField: string;

    /**
     * Indica si la columna llevara un render
     */
    render: boolean;

    /**
     * Inidica si la columna es editable
     */
    editable: boolean;

    /**
     * Indica si se va agrupar por esa columna
     */
    grupo: boolean;

    /**
     * Bandera que indica que la columna utilizara labelfunction
     */
    labelFunction: boolean;

    /**
     * Bandera que indica si se va a dar formato decimal a la columna
     * */
    numberFormat: boolean;

    /**
     * 
     **/
    renderGroup: boolean;

    /**
     * Bandera que indica si la propiedad es monto
     * Si es monto se agregaran dos decimales, si es TC se agregan 6
     */
    monto: boolean;

}