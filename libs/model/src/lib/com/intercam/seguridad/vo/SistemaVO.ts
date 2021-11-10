	export class SistemaVO
	{
		public sisId : number;
		public sisNombre : string;
		public sisDescripcion : string;
		public sisTipo : string;
		public sisUrl : string;
		public sisEstatus : boolean;
		/**
	    * Constructor de la clase.
	    */
		public constructor()
		{
			this.sisNombre = '';
			this.sisDescripcion = '';
			this.sisTipo = 'INTER';
			this.sisUrl = '';
			this.sisEstatus = true;
		}
		public toString():string{ 
			return this.sisId.toString() ;
		}
		
	
	}