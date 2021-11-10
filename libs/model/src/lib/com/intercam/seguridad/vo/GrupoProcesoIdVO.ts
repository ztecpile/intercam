
	export class GrupoProcesoIdVO
	{
		public gpuClave : number;
		public prcClave : number;
		public sisId : number;
		
		public toString():string{
			return this.gpuClave.toString()+ ',' +this.prcClave.toString()+ ',' + this.sisId.toString();
		}
		
}