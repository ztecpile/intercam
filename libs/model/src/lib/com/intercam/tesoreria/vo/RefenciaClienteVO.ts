export class RefenciaClienteVO{
    constructor(		
		public conId?: number,
		public refNumero?: string,
		public clvCli?: string,
		public empCli?: string,
		public staCli?: string,
		public estatus?: string,
		public desPro?: string,
		public oriPro?: string,
		public banId?: string,
		public banNombre?: string,
		public cueMoneda?: string,
		public proveedor?: string,
		
		public tmpCveLegada?: string,
		public perNomCorto?: string,
		public rfc?: string,
		public tconDescripcion?: string,
		public perfDescripcion?: string,
		public conSelect?: boolean
	){}
}