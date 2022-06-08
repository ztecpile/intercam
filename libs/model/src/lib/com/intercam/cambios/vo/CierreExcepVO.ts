/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export class CierreExcepVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Identificador del cierre de excepcion
     */
    idCce: number;

    /**
     * Cierre excepcion (V o F)
     */
    cceCierreexcep: string;

    /**
     * Identificador del cliente
     */
    perId: number;

    /**
     * Fecha inicio
     */
    cceFechaabre: Date;

    /**
     * Fecha cierre
     */
    cceFechacierra: Date;

    /**
     * Usuario que abre
     */
    cceUsuabre: string;

    /**
     * Usuario que cierra
     */
    cceUsucierra: string;

    public  CierreExcepVO(){
			
    }
}