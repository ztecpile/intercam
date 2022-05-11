
export class AlertaAnalisisCatalog{
    constructor(

		public selectEnable:Boolean= false,
		public selectCatalog:Boolean= false,
		public listaTipoAlerta?: any[],
		public idCatalog?: number,
		public grupocatalog?: string,
		public idEmpresa?: number,
		public key?: string,
		public value?: string,
		public catChild?: string,
		public childList?: any[],
		public catTooltip?: string
		
    ){}
}