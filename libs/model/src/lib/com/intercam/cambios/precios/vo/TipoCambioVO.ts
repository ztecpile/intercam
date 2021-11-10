/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 *
 * Objeto espejo del catálogo tipo_cambio, para establecer la comunicarse entre Flex y JAVA.
 */

export class TipoCambioVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Almacena Identificador de la mesa.
     **/
    private _cveMesa: number;

    /**
     * Almacena Identificador de la divisa.
     **/
    private _divId: string;

    /**
     * Almacena Identificador del instrumento.
     **/
    private _insId: number;

    /**
     * Almacena Identificador de la fecha valor.
     **/
    private _fvaId: number;

    /**
     * Almacena Fecha de actualizacion
     **/
    private _tcFechaStr: string;

    /**
     * Almacena Tipo cambio compra.
     **/
    private _tcCompra: number;

    /**
     * Almacena Tipo cambio venta.
     **/
    private _tcVenta: number;

    /**
     * Almacena Tipo cambio compra como un String.
     **/
    private _tcCompraStr: string;

    /**
     * Almacena Tipo cambio venta como un String.
     **/
    private _tcVentaStr: string;


    // ***************************************************** //
    //  Constructor de la clase
    // ***************************************************** //
    constructor() {
        this.tcCompraStr = '0.000000';
        this.tcVentaStr = '0.000000';
    }


    // ***************************************************** //
    //  Metodos de acceso
    // ***************************************************** //

    /**
     * @return the cveMesa
     */
    public get cveMesa(): number {
        return this._cveMesa;
    }

    /**
     * @param value the cveMesa to set
     */
    public set cveMesa(value: number) {
        this._cveMesa = value;
    }

    /**
     * @return the divId
     */
    public get divId(): string {
        return this._divId;
    }

    /**
     * @param value the divId to set
     */
    public set divId(value: string) {
        this._divId = value;
    }

    /**
     * @return the insId
     */
    public get insId(): number {
        return this._insId;
    }

    /**
     * @param value the insId to set
     */
    public set insId(value: number) {
        this._insId = value;
    }

    /**
     * @return the fvaId
     */
    public get fvaId(): number {
        return this._fvaId;
    }

    /**
     * @param value the fvaId to set
     */
    public set fvaId(value: number) {
        this._fvaId = value;
    }

    /**
     * @return the tcFechaStr
     */
    public get tcFechaStr(): string {
        return this._tcFechaStr;
    }

    /**
     * @param value the tcFechaStr to set
     */
    public set tcFechaStr(value: string) {
        this._tcFechaStr = value;
    }

    /**
     * @return the tcCompra
     */
    public get tcCompra(): number {
        return this._tcCompra;
    }

    /**
     * @param value the tcCompra to set
     */
    public set tcCompra(value: number) {
        this._tcCompra = value;
    }

    /**
     * @return the tcVenta
     */
    public get tcVenta(): number {
        return this._tcVenta;
    }

    /**
     * @param value the tcVenta to set
     */
    public set tcVenta(value: number) {
        this._tcVenta = value;
    }

    /**
     * @return the tcCompraStr
     */
    public get tcCompraStr(): string {
        return this._tcCompraStr;
    }

    /**
     * @param value the tcCompraStr to set
     */
    public set tcCompraStr(value: string) {
        this._tcCompraStr = value;
    }

    /**
     * @return the tcVentaStr
     */
    public get tcVentaStr(): string {
        return this._tcVentaStr;
    }

    /**
     * @param value the tcVentaStr to set
     */
    public set tcVentaStr(value: string) {
        this._tcVentaStr = value;
    }

}