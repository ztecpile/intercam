
export class ChequeSicaVO {
  constructor(
    public desChe?: string,
    public monChe?: number,
    public clvOpe?: number,
    public refChe?: number,
    public numChe?: number,
    public clvSuc?: string,
    public clvBan?: string,
    public fecChe?: Date,
    public edoChe?: string,
    public fcoChe?: Date,
    public fe1Che?: Date,
    public fe2Che?: Date,
    public tipChe?: string,
    public diferenciaDias?: number,
    public folioRecompra?: string,
    public estatusMarcaje?: string,
    public divisa?: string
  ) {}
}
