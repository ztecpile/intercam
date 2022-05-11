
export class PreguntaPersonalizadaVO{
    constructor(

		public id?: number,
		public tipoCuestionario?: number,
		public referenciaId?: number,
		public requiereDocumento?:  Boolean,
		public pregunta?:  string,
		public respuesta?:  string,
		public cuestionarioNumero?: number,
		public estatus?:  string,
		public perId?: number,
		public contratoId?: number,
		public usuario?:  string,
		public fecha?: Date,
		public cuesFolio?: number,
		public fileName?: string,
		public fileBase64?: string,
		public cuesRequ?:  string,
		
		//public imgDoc?: UploadImgPdfUtil,
		public selected?:  Boolean,
		public enabled?:  Boolean

    ){}

}