export class CuentaChequeVO{
    constructor(
    public numCliente?: string,
    public sucursal?: string,
    public clabe?: string,
    public moneda?: string,
    public status?: string,
    public descripcion?: string,
    public cliComOrd?: string,
    public disponible?: number,
    public cuenta?: string,
    public monedaDescri?: string,
    public tipoCliente?: string,
    public monedaAbrevi?: string,
    public tipoCuenta?: string,
    public tiposCuenta?: Object 
    ){}
}