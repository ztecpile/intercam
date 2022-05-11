export class BancarioAcreedorVO {
  constructor(
    public banAcreid?: number,
    public banIdgrupo?: number,
    public banTipoacre?: string,
    public banFolio?: number,
    public banCveban?: string,
    public banDivisa?: string,
    public banFecmovban?: Date,
    public banTipomov?: string,
    public banMonto?: number,
    public banReferen?: string,
    public banEstatus?: number,
    public banCveclien?: string,
    public banNomclien?: string,
    public banConcilia?: string,
    public banSbf?: string,
    public banPromotor?: string,
    public banDescripcion?: string,
    public acre_id?: number,
    public banDevuelto?: number,
    public conSelected?: boolean
  ) {}
}
