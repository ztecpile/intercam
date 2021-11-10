export class CtaAsignaVO {
  constructor(
    public perNomCorto?: string,
    public banNombre?: string,
    public cueId?: number,
    public cueCuentaBan?: string,
    public divId?: string,
    public cueClabe?: string,
    public cuePlazaBanco?: string,
    public cueSucBanco?: number,
    public cueClaveSwift?: string,
    public banId?: number,
    public cueConvenio?: string,
    public cueTipCta?: string,
    public cueUsoCuenta?: string,
    public empresaId?: number
  ) {}
}
