export class DiaFestivoVO {
	public dfsClave: number;
	public dfsFechaStr: string;
	public dfsDescripcion: string;
	public dfsEstatus: boolean;
	public comClave: number;
	public dfsPais: number;
	public paiDescripcion: string;
	/**
	* Constructor de la clase.
	*/
	public constructor() {
		this.dfsDescripcion = '';
		this.dfsEstatus = true;
		this.comClave = 999;
		this.paiDescripcion = '';
		this.dfsFechaStr = '';
	}
}