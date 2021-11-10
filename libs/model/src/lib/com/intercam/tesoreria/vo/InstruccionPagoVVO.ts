import { PagoElectronico } from './PagoElectronico';
export class InstruccionPagoVVO {
  constructor(
    public pagoElectronico?: PagoElectronico,
    public instId?: number,
    public cliente?: string,
    public cuentaCargo?: string,
    public cuentaAbono?: string,
    public fechaOpe?: Date,
    public instFhUltimoStatus?: Date,
    public usuario?: string,
    public instConvenio?: string,
    public instRefPago?: string,
    public instPlazaBcoCliente?: string,
    public instSucBcoCliente?: string,
    public instCtaClabeCliente?: string,
    public descFormato?: string,
    public desEstatus?: string,
    public instBeneficiario?: string,
    public instDeal?: string,
    public banco?: string,
    public divId?: string,
    public instFhRegistro?: Date,
    public conId?: string,
    public clvSucLegada?: string,
    public statusCuenta?: string,
    public cveTipoCta?: string,
    public medId?: number
  ) {}
}