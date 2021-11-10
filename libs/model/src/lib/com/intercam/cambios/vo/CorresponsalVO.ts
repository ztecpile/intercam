/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export interface CorresponsalVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    /**
     * Clave del Corresponsal o cliente
     */
    claveCorresp: string;

    /**
     * Nombre o razon social del corresponsal
     */
    nombreCorresp: string;

    /**
     * Identificador del ctrlCorresponsal (i00ctrlCorresponsal.ide_ctr)
     */
    claveCobranza: number;

    /**
     * Fecha en que se realizaron las operaciones
     */
    fechaOperacionStr: string;

    /**
     * Clave de la divisa asociada a las operaciones
     */
    claveDivisa: string;

    /**
     * Monto en la divisa
     */
    montoDivisa: number;

    /**
     * Monto en pesos
     */
    montoPesos: number;

    /**
     * Numero total de aoperaciones agrupadas
     */
    numOper: number;

    /**
     * Descripcion de la sucursal
     */
    descSucursal: string;

    /**
     * Clave de la sucursal
     */
    claveSucursal: string;

    /**
     * Indica el estado en el que se encuentra el pago del corresponsal
     *     0: Pendiente
     *     1: Por liquidar
     *     2: Pagado
     */
    edoCtrl: number;

    /**
     * Fecha en que se hace el marcaje del estado de la operacion de 0 (pendiente) a 1 (por liquidar)
     */
    fecCtrlStr: string;

}