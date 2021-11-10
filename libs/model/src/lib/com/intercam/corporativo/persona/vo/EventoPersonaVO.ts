import { MotivoEventoVO } from "./MotivoEventoVO";
import { TipoEventoVO } from "./TipoEventoVO";

	export class EventoPersonaVO
	{
		public  epeId : Number;
		public  tipoEventoVO : TipoEventoVO;
		public  motivoEventoVO : MotivoEventoVO;
		public  perId : Number;
		public  perIdCompania : Number;
		public  epeDescripcion : String;
		public  epeEventoStr : String;
		public  epeStatus : String;
		public  epeFaltaStr : String;
		public  usuUsuario : String;
		
		public  EventoPersonaVO()
		{
			this.tipoEventoVO = new TipoEventoVO();
			this.motivoEventoVO = new MotivoEventoVO();
			this.epeEventoStr = '';
		}
		
		public  toString() : String
	    {
	    	return this.epeId.toString();
	    }

	}
