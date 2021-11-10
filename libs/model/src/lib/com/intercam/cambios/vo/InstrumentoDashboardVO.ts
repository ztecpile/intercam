/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
*/

export class InstrumentoDashboardVO {

    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    private _idInstrumento: number;
    private _desInstrumento: string;
    private _tipoOperacion: string;
    private _fechaValor: number;
    private _divisaUSD: string;
    private _tipoCompraUSDHoy: number;
    private _tipoCompraUSDHoyString: string;
    private _tipoVentaUSDHoy: number;
    private _tipoVentaUSDHoyString: string;
    private _tipoCompraUSD24: number;
    private _tipoCompraUSD24String: string;
    private _tipoVentaUSD24: number;
    private _tipoVentaUSD24String: string;
    private _tipoCompraUSD48: number;
    private _tipoCompraUSD48String: string;
    private _tipoVentaUSD48: number;
    private _tipoVentaUSD48String: string;
    private _divisaEUR: string;
    private _tipoVentaEUROHoy: number;
    private _tipoVentaEUROHoyString: string;
    private _tipoCompraEUROHoy: number;
    private _tipoCompraEUROHoyString: string;
    private _tipoCompraEURO24: number;
    private _tipoCompraEURO24String: string;
    private _tipoVentaEURO24: number;
    private _tipoVentaEURO24String: string;
    private _tipoCompraEURO48: number;
    private _tipoCompraEURO48String: string;
    private _tipoVentaEURO48: number;
    private _tipoVentaEURO48String: string;
    private _divisaOTRA: string;
    private _tipoVentaDivisaHoy: number;
    private _tipoVentaDivisaHoyString: string;
    private _tipoCompraDivisaHoy: number;
    private _tipoCompraDivisaHoyString: string;
    private _tipoCompraDivisa24: number;
    private _tipoCompraDivisa24String: string;
    private _tipoVentaDivisa24: number;
    private _tipoVentaDivisa24String: string;
    private _tipoCompraDivisa48: number;
    private _tipoCompraDivisa48String: string;
    private _tipoVentaDivisa48: number;
    private _tipoVentaDivisa48String: string;


    // ***************************************************** //
    //  Constructor de la clase
    // ***************************************************** //
    constructor() {

    }


    // ***************************************************** //
    //  Metodos de acceso
    // ***************************************************** //
    get fechaValor(): number {
        return this._fechaValor;
    }

    set fechaValor(value: number) {
        this._fechaValor = value;
    }
    get tipoOperacion(): string {
        return this._tipoOperacion;
    }


    set tipoOperacion(value: string) {
        this._tipoOperacion = value;
    }
    get divisaUSD(): string {
        return this._divisaUSD;
    }


    set divisaUSD(value: string) {
        this._divisaUSD = value;
    }
    get divisaEUR(): string {
        return this._divisaEUR;
    }


    set divisaEUR(value: string) {
        this._divisaEUR = value;
    }
    get divisaOTRA(): string {
        return this._divisaOTRA;
    }


    set divisaOTRA(value: string) {
        this._divisaOTRA = value;
    }
    get idInstrumento(): number {
        return this._idInstrumento;
    }

    set idInstrumento(value: number) {
        this._idInstrumento = value;
    }

    get desInstrumento(): string {
        return this._desInstrumento;
    }

    set desInstrumento(value: string) {
        this._desInstrumento = value;
    }

    get tipoCompraUSDHoy(): number {
        return this._tipoCompraUSDHoy;
    }

    set tipoCompraUSDHoy(value: number) {
        this._tipoCompraUSDHoy = value;
    }

    get tipoCompraUSDHoyString(): string {
        return this._tipoCompraUSDHoyString;
    }

    set tipoCompraUSDHoyString(value: string) {
        this._tipoCompraUSDHoyString = value;
    }

    get tipoVentaUSDHoy(): number {
        return this._tipoVentaUSDHoy;
    }

    set tipoVentaUSDHoy(value: number) {
        this._tipoVentaUSDHoy = value;
    }

    get tipoVentaUSDHoyString(): string {
        return this._tipoVentaUSDHoyString;
    }

    set tipoVentaUSDHoyString(value: string) {
        this._tipoVentaUSDHoyString = value;
    }

    get tipoCompraUSD24(): number {
        return this._tipoCompraUSD24;
    }

    set tipoCompraUSD24(value: number) {
        this._tipoCompraUSD24 = value;
    }

    get tipoCompraUSD24String(): string {
        return this._tipoCompraUSD24String;
    }

    set tipoCompraUSD24String(value: string) {
        this._tipoCompraUSD24String = value;
    }

    get tipoVentaUSD24(): number {
        return this._tipoVentaUSD24;
    }

    set tipoVentaUSD24(value: number) {
        this._tipoVentaUSD24 = value;
    }

    get tipoVentaUSD24String(): string {
        return this._tipoVentaUSD24String;
    }
    set tipoVentaUSD24String(value: string) {
        this._tipoVentaUSD24String = value;
    }

    get tipoCompraUSD48(): number {
        return this._tipoCompraUSD48;
    }

    set tipoCompraUSD48(value: number) {
        this._tipoCompraUSD48 = value;
    }

    get tipoCompraUSD48String(): string {
        return this._tipoCompraUSD48String;
    }

    set tipoCompraUSD48String(value: string) {
        this._tipoCompraUSD48String = value;
    }

    get tipoVentaUSD48(): number {
        return this._tipoVentaUSD48;
    }

    set tipoVentaUSD48(value: number) {
        this._tipoVentaUSD48 = value;
    }

    get tipoVentaUSD48String(): string {
        return this._tipoVentaUSD48String;
    }

    set tipoVentaUSD48String(value: string) {
        this._tipoVentaUSD48String = value;
    }

    get tipoVentaEUROHoy(): number {
        return this._tipoVentaEUROHoy;
    }

    set tipoVentaEUROHoy(value: number) {
        this._tipoVentaEUROHoy = value;
    }

    get tipoVentaEUROHoyString(): string {
        return this._tipoVentaEUROHoyString;
    }

    set tipoVentaEUROHoyString(value: string) {
        this._tipoVentaEUROHoyString = value;
    }

    get tipoCompraEUROHoy(): number {
        return this._tipoCompraEUROHoy;
    }

    set tipoCompraEUROHoy(value: number) {
        this._tipoCompraEUROHoy = value;
    }

    get tipoCompraEUROHoyString(): string {
        return this._tipoCompraEUROHoyString;
    }

    set tipoCompraEUROHoyString(value: string) {
        this._tipoCompraEUROHoyString = value;
    }

    get tipoCompraEURO24(): number {
        return this._tipoCompraEURO24;
    }

    set tipoCompraEURO24(value: number) {
        this._tipoCompraEURO24 = value;
    }

    get tipoCompraEURO24String(): string {
        return this._tipoCompraEURO24String;
    }

    set tipoCompraEURO24String(value: string) {
        this._tipoCompraEURO24String = value;
    }

    get tipoVentaEURO24(): number {
        return this._tipoVentaEURO24;
    }

    set tipoVentaEURO24(value: number) {
        this._tipoVentaEURO24 = value;
    }

    get tipoVentaEURO24String(): string {
        return this._tipoVentaEURO24String;
    }

    set tipoVentaEURO24String(value: string) {
        this._tipoVentaEURO24String = value;
    }

    get tipoCompraEURO48(): number {
        return this._tipoCompraEURO48;
    }

    set tipoCompraEURO48(value: number) {
        this._tipoCompraEURO48 = value;
    }

    get tipoCompraEURO48String(): string {
        return this._tipoCompraEURO48String;
    }

    set tipoCompraEURO48String(value: string) {
        this._tipoCompraEURO48String = value;
    }

    get tipoVentaEURO48(): number {
        return this._tipoVentaEURO48;
    }

    set tipoVentaEURO48(value: number) {
        this._tipoVentaEURO48 = value;
    }

    get tipoVentaEURO48String(): string {
        return this._tipoVentaEURO48String;
    }

    set tipoVentaEURO48String(value: string) {
        this._tipoVentaEURO48String = value;
    }

    get tipoVentaDivisaHoy(): number {
        return this._tipoVentaDivisaHoy;
    }

    set tipoVentaDivisaHoy(value: number) {
        this._tipoVentaDivisaHoy = value;
    }

    get tipoVentaDivisaHoyString(): string {
        return this._tipoVentaDivisaHoyString;
    }

    set tipoVentaDivisaHoyString(value: string) {
        this._tipoVentaDivisaHoyString = value;
    }

    get tipoCompraDivisaHoy(): number {
        return this._tipoCompraDivisaHoy;
    }

    set tipoCompraDivisaHoy(value: number) {
        this._tipoCompraDivisaHoy = value;
    }

    get tipoCompraDivisaHoyString(): string {
        return this._tipoCompraDivisaHoyString;
    }

    set tipoCompraDivisaHoyString(value: string) {
        this._tipoCompraDivisaHoyString = value;
    }

    get tipoCompraDivisa24(): number {
        return this._tipoCompraDivisa24;
    }

    set tipoCompraDivisa24(value: number) {
        this._tipoCompraDivisa24 = value;
    }

    get tipoCompraDivisa24String(): string {
        return this._tipoCompraDivisa24String;
    }

    set tipoCompraDivisa24String(value: string) {
        this._tipoCompraDivisa24String = value;
    }

    get tipoVentaDivisa24(): number {
        return this._tipoVentaDivisa24;
    }

    set tipoVentaDivisa24(value: number) {
        this._tipoVentaDivisa24 = value;
    }

    get tipoVentaDivisa24String(): string {
        return this._tipoVentaDivisa24String;
    }

    set tipoVentaDivisa24String(value: string) {
        this._tipoVentaDivisa24String = value;
    }

    get tipoCompraDivisa48(): number {
        return this._tipoCompraDivisa48;
    }

    set tipoCompraDivisa48(value: number) {
        this._tipoCompraDivisa48 = value;
    }

    get tipoCompraDivisa48String(): string {
        return this._tipoCompraDivisa48String;
    }

    set tipoCompraDivisa48String(value: string) {
        this._tipoCompraDivisa48String = value;
    }

    get tipoVentaDivisa48(): number {
        return this._tipoVentaDivisa48;
    }

    set tipoVentaDivisa48(value: number) {
        this._tipoVentaDivisa48 = value;
    }

    get tipoVentaDivisa48String(): string {
        return this._tipoVentaDivisa48String;
    }

    set tipoVentaDivisa48String(value: string) {
        this._tipoVentaDivisa48String = value;
    }

}