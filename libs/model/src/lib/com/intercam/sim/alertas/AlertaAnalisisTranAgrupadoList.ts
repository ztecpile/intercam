import { AlertaAnalisisTransaccion } from "@intercam/model";

export class AlertaAnalisisTranAgrupadoList{
    constructor(

		public idContrato?: number,
		public cveLegada?: string,
		public tipoContrato?: number,
		public montoTotal?: number,
		public totalTran?: number,
		public fhIni?: Date,
		public fhFin?: Date,
		public listaTran?: AlertaAnalisisTransaccion[]

    ){}

}