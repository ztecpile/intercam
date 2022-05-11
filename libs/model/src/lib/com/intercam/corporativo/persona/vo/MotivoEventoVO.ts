import { TipoEventoVO } from "./TipoEventoVO";

	export class MotivoEventoVO
	{
		public  mevId : number;
		public  tipoEventoVO : TipoEventoVO;
		public  mevDescripcion : string
		
		public  MotivoEventoVO()
		{
			this.tipoEventoVO = new TipoEventoVO();
		}

	}
