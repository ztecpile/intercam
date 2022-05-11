import { ConsultaSaldoVO } from '../../../../banco/ConsultaSaldoVO';
import { MovimientoVO } from '../../../../banco/MovimientoVO';
export class AlertaAnalisisContrato{
    constructor(

        public idContrato?: number,
		public divId?: string,
		public cveLegada?: string,
		public conFaperContrato?: Date,
		public conFaperContratoStr?: string,
		public tconDescripcion?: string,
		public tRelacionDescripcion?: string,
		public conEmail?: string,
		public tConId?: number,
		public saldoVo?: ConsultaSaldoVO,
		public movList?: MovimientoVO[],
		public saldo?: string,
				
		public promotorId?: number,
		public promotorName?: string,
		public sucursalDesc?: string,
		public cvePromotor?: string,
		public estatusContrato?: string,
		public perId?: number,
		public contratoSaldo?: string,
		public fechaAseguramiento?: string,
		public fechaDescarga?: Date,
		public divisaSet?: string

    ){}
}