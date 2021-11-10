export class ChequeVO {
  constructor(
    public opeId?: number,
    public tmpDealsica?: number,
    public paoReferencia?: number,
    public paoBeneficiario?: string,
    public paoMonto?: number,
    public tmpClvSucLeg?: string,
    public paoConsecutivo?: number,
    public clvBan?: string,
    public opeFecha?: Date,
    public tipChe?: string,
    public edoChe?: string,
    public tconId?: number,
    public usuId?: number,
    public chequeOrgVO?: ChequeVO,
    public bitSession?: number,
    public tipoOpe?: string
  ) {}
}
