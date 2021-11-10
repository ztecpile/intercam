export class RolMensajeVO {
	public rol: number;
	public mensaje: number;
	public rmeTopicoFlex: string;
	public menSubject: string;
	public tmeDescripcion: string;
	public medDescripcion: string;
	/**
	* Constructor de la clase.
	*/
	public constructor() {
		this.rmeTopicoFlex = '';
		this.menSubject = '';
		this.tmeDescripcion = '';
		this.medDescripcion = '';
	}

}