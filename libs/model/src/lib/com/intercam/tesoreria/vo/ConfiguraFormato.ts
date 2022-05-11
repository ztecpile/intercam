import { FormatoSalida, ConfiguraFormatoId } from '@intercam/model';

export class ConfiguraFormato {
  constructor(
    public id?: ConfiguraFormatoId,
    public formatoSalida?: FormatoSalida,
    public confTipoReg?: string,
    public confPosicion?: number,
    public confNomCampo?: string,
    public confLongitud?: number,
    public confCaracterSepara?: string,
    public confJustificacion?: string,
    public confConstante?: string,
    public confFormatoMonto?: number,
    public confCaracterRelleno?: string,
    public funcGeneraDato?: string,
    public claveCampo?: string
  ) {}
}
