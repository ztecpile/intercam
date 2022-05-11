export class MapeoDni {
  constructor(
    public mapId?: number,
    public mapEmpresaId?: number,
    public mapBanId?: number,
    public mapBancoFuente?: string,
    public mapTipoDeposito?: string,
    public mapBancoDestino?: string,
    public mapCuentaId?: number,
    public mapBaseConect?: number,
    public empresaDesCorta?: string,
    public banDescCorta?: string,
    public cuentaBanco?: string,
    public mapDivId?: string,
    public paramDescripcion?: string
  ) {}
}
