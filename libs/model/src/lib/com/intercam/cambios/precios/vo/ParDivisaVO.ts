/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

export class ParDivisaVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Identificador ParDivisa 
     **/
    parId: number;
    /**
     * Clave de la sucursal
     **/
    sucClave: number;
    /**
     * Identificador de limite
     **/
    limId: number;
    /**
     * Id Divisa1
     **/
    divId1: string;
    /**
     * Id Divisa2
     **/
    divId2: string;

    /**
     * Estatus del par de divisas (AC/SU)
     */
    parEstatus: string;

    /**
     * Subyacente: Concatenacion de div1/div2
     * Atributo NO Persistido, requerido para la bitacora de operaciones
     */
    subyacente: string;


    // ***************************************************** //
    //  Constructor de la clase
    // ***************************************************** //
    constructor() {
        this.sucClave = 0;
        this.divId1 = '';
        this.divId2 = '';
        this.parEstatus = 'AC';
        this.subyacente = '';
    }

}