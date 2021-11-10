/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 * 
 * Objeto general e interno, para el manejo de errores y paso de informacion en servicios
 * NOTA;
 *      NUNCA debe regresarse un objeto de este tipo directamente en un WS, debe ser mapeado al objeto que se regresara
 *
 * @see com.intercam.cambios.vo.LocalResultServicioVO.java
 * @author mpadilla
 */

export class LocalResultServicioVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Codigo de error correspondiente a la causa.
     */
    public errorCode: string;

    /**
     * Descripcion de la  regla o causa por la cual no podemos aceptar la operacion.
     */
    public causa: string;

    /**
     * Descripcion del proceso para el manejo de excepciones,
     *      cuando la excepcion no fue manejada como un BusinessException.
     */
    public procesoMsgGral: string;

    /**
     * Numero de deal en POS
     */
    public dealSica: number;

    /**
     * Mapa con la informacion de respuesta en caso de exito.
     */
    public resultMap: Object;


    /* ***************************************************** *
     *               C O N S T R U C T O R E S               *
     * ***************************************************** */
    /**
     * Default Constructor
     */
    constructor() {
        this.resultMap = new Object();
    }

}