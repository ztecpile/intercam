import { InstrumentoLiquidacion } from './InstrumentoLiquidacion';

export class TipoLiquidacionId {
  constructor(
    public tipCveLiq?: string,
    public divId?: string,
    public instrumentoLiquidacion?: InstrumentoLiquidacion
  ) {}
}
