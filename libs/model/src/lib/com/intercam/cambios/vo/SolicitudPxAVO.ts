/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 */

import { ObservaPxAVO } from './ObservaPxAVO';
import { SeqautPxAVO } from './SeqautPxAVO';

export class SolicitudPxAVO {
  constructor(
    // ***************************************************** //
    //                 P R O P I E D A D E S                 //
    // ***************************************************** //
    //campos de sica
    public tmp_clvSuc?: string,
    public tmp_clvOpe?: number,
    public tmp_clvPro?: string,
    public tmp_cl1Gru?: string,
    public tmp_antClvSol?: string,
    public tmp_antHorvSol?: string,
    public tmp_antFechaSol?: Date,
    public tmp_antMotivoSol?: number,
    public tmp_antMarca?: string,
    public tmp_antEstatus?: number,
    public tmp_antSolSta?: string,
    public tmp_anthorEve?: string,
    public montoSolicitado?: number,
    public montoEnProceso?: number,
    public montoEnProcesoAut?: number,
    public montoAutorizado?: number,
    public montoRechazado?: number,
    public seqautPxA?: SeqautPxAVO,
    public observaPxA?: ObservaPxAVO
  ) {}
}
