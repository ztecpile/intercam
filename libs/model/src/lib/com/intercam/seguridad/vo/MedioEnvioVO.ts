
export class MedioEnvioVO {
	public medId: number;
	public medNombre: string;
	public medMaxLen: number;
	/**
	* Constructor de la clase.
	*/
	public constructor() {
		this.medNombre = '';
		this.medMaxLen = 0;
	}
}