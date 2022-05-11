import { AlertaAnalisis, AlertaAnalisisContrato, AlertaAnalisisMaster, CasoAnalisisVO, PersonaVO } from "@intercam/model";

export class DetalleContratos{
    constructor(

		public listContratoPersona?: AlertaAnalisisContrato[],
		public tipoRelacion?: string,
		public casoAnalisis?: CasoAnalisisVO,
		public listaClienteAlertas?: AlertaAnalisis[],
		public persona?: PersonaVO,
		public alertaMasterVo?: AlertaAnalisisMaster,
		public cargaPersonaPantalla: boolean = false

    ){}

}