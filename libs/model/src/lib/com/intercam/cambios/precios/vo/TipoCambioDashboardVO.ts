/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 * 
 * Objeto para presentar los tipos en la pantalla de Cierre Rapido.
 */

import { TipoCambioVO } from "./TipoCambioVO";

export class TipoCambioDashboardVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //

    /**
     * Almacena Identificador del instrumento.
     **/
    private _insId: number;

    /**
     * Almacena Identificador de la fecha valor.
     **/
    private _fvaId: number;

    /**
     * Almacena Identificador de la divisa.
     **/
    private _divId: string;

    /**
     * Descripcion del Instrumento, se utiliza para presentar la informacion en pantalla
     */
    private _insDesc: string;

    /**
     * Objeto TipoCambioVO con la informacion relacionada a los tipos de cambios para la divisa USD
     */
    private _tipoCambioUSD: TipoCambioVO;

    /**
     * Objeto TipoCambioVO con la informacion relacionada a los tipos de cambios para la divisa USD
     */
    private _tipoCambioEURO: TipoCambioVO;

    /**
     * Objeto TipoCambioVO con la informacion relacionada a los tipos de cambios para la otra divisa seleccionada
     */
    private _tipoCambioDIV: TipoCambioVO;

    // ***************************************************** //
    //  Constructor de la clase
    // ***************************************************** //
    constructor() {
        this._tipoCambioUSD = new TipoCambioVO();
        this._tipoCambioEURO = new TipoCambioVO();
        this._tipoCambioDIV = new TipoCambioVO();
    }

    // ***************************************************** //
    //  Metodos de Acceso
    // ***************************************************** //
    /**
     * @return the _insId
     */
    get insId(): number {
        return this._insId;
    }

    /**
     * @param insId the _insId to set
     */
    set insId(insId: number) {
        this._insId = insId;
    }

    /**
     * @return the _fvaId
     */
    get fvaId(): number {
        return this._fvaId;
    }

    /**
     * @param fvaId the _fvaId to set
     */
    set fvaId(fvaId: number) {
        this._fvaId = fvaId;
    }

    /**
     * @return the divId
     */
    get divId(): string {
        return this._divId;
    }

    /**
     * @param value the divId to set
     */
    set divId(value: string) {
        this._divId = value;
    }

    /**
     * @return the _insDesc
     */
    get insDesc(): string {
        return this._insDesc;
    }

    /**
     * @param insDesc the _insDesc to set
     */
    set insDesc(insDesc: string) {
        this._insDesc = insDesc;
    }

    /**
     * @return the _tipoCambioUSD
     */
    get tipoCambioUSD(): TipoCambioVO {
        return this._tipoCambioUSD;
    }

    /**
     * @param tipoCambioUSD the _tipoCambioUSD to set
     */
    set tipoCambioUSD(tipoCambioUSD: TipoCambioVO) {
        this._tipoCambioUSD = tipoCambioUSD;
    }

    /**
     * @return the _tipoCambioEURO
     */
    get tipoCambioEURO(): TipoCambioVO {
        return this._tipoCambioEURO;
    }

    /**
     * @param tipoCambioEURO the _tipoCambioEURO to set
     */
    set tipoCambioEURO(tipoCambioEURO: TipoCambioVO) {
        this._tipoCambioEURO = tipoCambioEURO;
    }

    /**
     * @return the _tipoCambioDIV
     */
    get tipoCambioDIV(): TipoCambioVO {
        return this._tipoCambioDIV;
    }

    /**
     * @param tipoCambioDIV the _tipoCambioDIV to set
     */
    set tipoCambioDIV(tipoCambioDIV: TipoCambioVO) {
        this._tipoCambioDIV = tipoCambioDIV;
    }

    // ***************************************************** //
    //  Metodos de Proeso
    // ***************************************************** //
    /**
     * 
     * @returns string
     */
    toString(): string {
        return '['.concat(
            'Instrumento: ' + this._insId.toString() +
            '\tFecha Valor: ' + this.fvaId.toString() +
            '\tCompra USD: ' + this.tipoCambioUSD.tcCompraStr +
            '\tVenta  USD: ' + this.tipoCambioUSD.tcVentaStr +
            '\tCompra EUR:' + this.tipoCambioEURO.tcCompraStr +
            '\tVenta  EUR:' + this.tipoCambioEURO.tcVentaStr +
            '\tCompra OTR: ' + this.tipoCambioDIV.tcCompraStr +
            '\tVenta  OTR: ' + this.tipoCambioDIV.tcVentaStr).concat(']');
    }

}