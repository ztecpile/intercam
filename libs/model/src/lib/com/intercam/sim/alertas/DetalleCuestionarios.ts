import { AlertaAnalisis, AlertaAnalisisContrato, AlertaAnalisisMaster, CasoAnalisisVO, PersonaVO, PromotoresPersonaVO } from "@intercam/model";

export class DetalleCuestionarios{
    constructor(

		public alertaAnalisisContratoVO?: AlertaAnalisisContrato,
		public tipoAna?: Boolean,
		public perfil?: number,
		public perId?: number,
		public listaPromotores?: PromotoresPersonaVO[],
		public cuestionarioActivo?: boolean,
		public alertaMasterVo?: AlertaAnalisisMaster

    ){}

}