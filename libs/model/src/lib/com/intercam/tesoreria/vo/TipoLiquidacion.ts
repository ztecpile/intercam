import { TipoLiquidacionId } from './TipoLiquidacionId';
import { MedioLiquidador } from './MedioLiquidador';

export class TipoLiquidacion {
  constructor(
    public id?: TipoLiquidacionId,
    public medioLiquidador?: MedioLiquidador,
    public tipDesc?: string,
    public tipSituacion?: string,
    public tipBRequiereAut?: string,
    public tipMontoAutorizacion?: number,
    public tipAfectacion?: string,
    public bReqValPld?: string,
    public divNombre?: string
  ) {}
}
