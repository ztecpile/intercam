export class RegistroTiempoAlertasVO{
    constructor(
        public rtiId?: number,
		public aleId?: number,
		public moaId?: number,
		public abreAnalisis?: Date,
		public cierreAnalisis?: Date,
		public usuUsuario?: string,
		public observaciones?: string,
		public ultimaAlerta?: Boolean
        ){}
}