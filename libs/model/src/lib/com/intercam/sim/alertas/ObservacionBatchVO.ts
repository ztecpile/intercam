
export class ObservacionBatchVO{
    constructor(

		public idObservacion?: number,
		public idCaso?: number,
		public idCatalogo?: number,
		public otro?: string,
		public seccion?: number,
		public fecha?: Date,
		public usuario?: string,
		public catValue?: string,
		public obsCatalogoStr?: string
		
    ){}
}