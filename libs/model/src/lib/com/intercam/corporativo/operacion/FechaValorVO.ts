import { FechaValorIdVO } from './FechaValorIdVO';
export class FechaValorVO {
  public idVO: FechaValorIdVO;
  public fvaDescripcion: string;
  public tmpCvelegada: string;
  /**
   * Fecha correspondiente a la fecha valor
   * iable no mapeada a la base de datos
   **/
  public fvaFechaStr: string;
  /**
   * Numero de dias correspondiente a la fecha valor (0, 1, 2, ...)
   * iable no mapeada a la base de datos
   */
  public fvaDias: number;

  /**
   * Indica si la fecha vencimiento es hábil o no en Estados Unidos, se utiliza un valor numérico para evitar hacer
   *    "IF's" ya que este valor se utiliza para multiplicar los tipos de costo y precentar Ceros cuando no se
   *    opera en Estados Unidos.
   *      1: si es hábil
   *      0: No es habil.
   *
   * Esta iable no esta mapeadas a la base de datos y se llena como parte del proceso que establece la
   * informacion referente al día habil a operar y deja en memoria el objeto InfoFechaHabilVO
   */
  public fvaHabilEU: number;

  constructor() {
    this.idVO = new FechaValorIdVO();
  }
}
