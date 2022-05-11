import { MotivoEventoVO } from "./MotivoEventoVO";
import { TipoEventoVO } from "./TipoEventoVO";

	export class EventoPersonaVO
	{
		public  epeId : number;
		public  tipoEventoVO : TipoEventoVO;
		public  motivoEventoVO : MotivoEventoVO;
		public  perId : number;
		public  perIdCompania : number;
		public  epeDescripcion : string;
		public  epeEventoStr : string;
		public  epeStatus : string;
		public  epeFaltaStr : string;
		public  usuUsuario : string;
		
		public  EventoPersonaVO()
		{
			this.tipoEventoVO = new TipoEventoVO();
			this.motivoEventoVO = new MotivoEventoVO();
			this.epeEventoStr = '';
		}
		
		public  toString() : string
	    {
	    	return this.epeId.toString();
	    }

	}
