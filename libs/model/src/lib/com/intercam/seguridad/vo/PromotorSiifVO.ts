	export class PromotorSiifVO
	{
		public promotorId:number;
		public sucursalId:number;
		public areaId :number;
		public nivelPromotorId:number;
		public nivelId:number;
		public usuarioId :string;
		public promotorDsc:string;
		public promotorDscCorta:string ;
		public promotorExtension:string;
		public promotorAutorizado:boolean;
		public promotorEmail:string;
		
	
		public toString(): string{
			const s = '[\n' +	this.promotorId + ']';
			return s;
		}
}
