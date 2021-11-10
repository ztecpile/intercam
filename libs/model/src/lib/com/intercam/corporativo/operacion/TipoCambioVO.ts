export class TipoCambioVO {
    public cveMesa: number;
    /**
     * Identificador de la divisa
     */
    public  divId: string;
    /**
     * Identificador del instrumento
     */
    public  insId: number;
    /**
     * Identificador de la fecha valor
     */
    public  fvaId: number;
    /**
     * Fecha de registro y actualizacion
     */
    public  tcFecha: Date;
    /**
     * Tipo cambio compra
     */
    public  tcCompra: number;
    /**
     * Tipo cambio venta
     */
    public  tcVenta: number;

     /**
     * Tipo cambio compra
     */
    public  tcCompraStr: string;
    /**
     * Tipo cambio venta
     */
    public  tcVentaStr: string;

    constructor(
       
    ){
        this.tcCompraStr = '0.0000';
        this.tcVentaStr = '0.0000';
    }
}