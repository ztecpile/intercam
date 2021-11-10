export class CVCostoPorInstrumentoVO {
  constructor(
    /** clave sucursal*/
    public clvSuc?:string,
    /** instrumento*/
    public insOpe?:string,
    /** tipo ope (compra / venta)*/
    public tipOpe?:string,
    /** costo*/
    public incCst?:number,
    /** clave divisa*/
    public clvDiv?:string,
    /** tipo ope (viene / vamos)*/
    public incMvi?:string,
    /** estatus*/
    public incSta?:string,
    /** fecha modificacion*/
    public incFmo?:Date,
    /** tipo para mexdolar (valida si es mexdolar abono)*/
    public incTipo?:string
  ){}
}
