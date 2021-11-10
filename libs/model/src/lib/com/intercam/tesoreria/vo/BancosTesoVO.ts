export class BancosTesoVO {
  constructor(
    public banId?: number,
    public banOperaTefbv?: string,
    public banOperaSpeua?: string,
    public banClaveBanxico?: string,
    public banIdSica?: string,
    public banIdCasaBolsa?: string,
    public banIdFondos?: number,
    public banEstatus?: string,
    public banOperaIntercam?: string,
    public banNombre?: string,
    public paiClave?: number,
    public paiDescripcion?: string,
    public banDescCorta?: string
  ) {}
}
