
export class CasoAnalisisVO{
    constructor(
        public idCaso?: number,
		public perId?: number,
		public casoGrupo?: number,
		public usuarioAtiende?: string,
		public status?: string,
		public fechaAlta?: Date,
		public fechaActualizacion?: Date,
		public caFechaReasigna?: Date,
		public caFechaCierre?: Date,
		public nomCortoPersona?: string,
		public perNomComercial?: string,
		public anaTipoPersona?: string,
		public caStatusDesc?: string,
		public statusStr?: string,
		public statusCuestionario?: string,
		public nomUsuCom?: string,
		public motivoDeniega?: string,
		public comentaDeniega?: string,
		public diasCarga?: number,
		public diasAtencion?: number,
		public _selectCasoJust: Boolean=false,
		public _selectCasoCorreccion: Boolean=false,
		public selectCaso: Boolean=false
    ){}

}