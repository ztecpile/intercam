export class AlertaAnalisisTranListGroup{
    constructor(

        public idContrato?: number,
		public idPersona?: number,
		public descTipoContrato?: string,
		public idEmpresa?: number,
		public cveLegada?: string,
		
		public totalCargo?: number,
		public totalAbono?: number,
		
		public agrupadoCargo?: string,
		public agrupadoAbono?: string,

		public listaTranCargo?: any[],
		public listaTranAbono?: any[]
        

    ){}
}