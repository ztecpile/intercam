
export class SucursalVO {
    public sucClave: number;
    public dirClave: number;
    public sucDescripcion: string;
    public sucSica: string;
    public sucEstatus: boolean;
    public tmpSucOpera: string;
    public tmpClvsiif: number;
    public sucImpresora: string;
    public dirId: number;
    public tmpNumsuc: number;
    public tmpClvsabi: string;
    public sucParentClave: number;
    public sucTieneMesa: boolean;
    public sucMesa: number;
    /**
     * Campo que identifica si la sucursal opera o no efectivo
     */
    public sucOperaEfec: boolean;
    /**
     * Campo para relacionar la ventanilla al publico que corresponda a la sucursal
     */
    public sucCveVenta: string;
    /**
     * Campo que identifica la sucursal que emite la factura
     */
    public sucFacEmisor: string;
    /**
     * nombre o ip del servidor de archivos a usar en la sucursal.
     */
    public sucSrvArch: string;
    /**
     * numero de sucursal en sibamex
     */
    public sucNumeroBanco: string;

    /**
    * Constructor de la clase.
    */
    public constructor() {
        this.sucDescripcion = '';
        this.sucSica = '';
        this.sucEstatus = true;
        this.tmpSucOpera = '';
        this.sucImpresora = '';
        this.tmpClvsabi = '';
        this.sucNumeroBanco = '';
        this.sucCveVenta = '';
        this.sucFacEmisor = '';
    }
    /**
     * Regresa la interpretación en string del objeto.
     */
    public tostring(): string {
        return this.sucClave.toString();
    }
}