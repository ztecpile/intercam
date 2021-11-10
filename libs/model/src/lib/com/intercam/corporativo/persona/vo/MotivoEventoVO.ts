import { TipoEventoVO } from "./TipoEventoVO";

	export class MotivoEventoVO
	{
		public  mevId : Number;
		public  tipoEventoVO : TipoEventoVO;
		public  mevDescripcion : String
		
		public  MotivoEventoVO()
		{
			this.tipoEventoVO = new TipoEventoVO();
		}

	}
