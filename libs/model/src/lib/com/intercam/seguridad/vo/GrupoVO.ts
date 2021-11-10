
export class GrupoVO {
	public gpoClave: number;
	public gpoNombre: string;
	public gpoDescripcion: string;
	public gpoEstatus: boolean;
	public gpoEsPredefinido: boolean;
	/**
	* Constructor de la clase.
	*/
	constructor() {
		this.gpoNombre = '';
		this.gpoDescripcion = '';
		this.gpoEstatus = true;
		this.gpoEsPredefinido = false;
	}

}

