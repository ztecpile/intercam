
export class CuestionarioBatchVO{
    constructor(

		public id?: number,
		public idCasoAnalisis?: number,
		public perId?: number,
		public perfilId?: number,
		public consecLegado?: number,
		public tipoPersona?: string,
		public tipoContrato?: number,
		public contratoId?: number,
		public cuestionarioId?: number,
		public numeroCuestionario?: number,
		public status?: string,
		public idTarea?: number,
		public usuario?: string,
		public fecha?: Date,
		public cuesFolio?: number,
		public cuesSeguimiento?: number,
		public taskId?: string,
		public nomAnalistaSr?: string,
		public usuUsuarioProm?: string,
		public cubFecTermino?: Date,
		public cubFecRespond?: Date,
		public cubComentario?: string,
		public cubEmailDirector?: string,
		
		public cubFecTerminoStr?: string,
		public cubFecRespondStr?: string

    ){}

}