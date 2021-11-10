export class ResultadoSPIDVO {
  constructor(
    /**
     * codigo
     */
    public codigo: string,
    /**
     * mensaje
     */
    public msg: string,
    /**
     * folio
     */
    public folio: string,
    /*
     *medio idﬂ
     * */
    public medioId: number,

    /*
     *Fecha
     * */
    public smsFecha: string,

    /*
     * smsRefMedio2
     * */
    public smsRefMedio2: string
  ) {}
}
