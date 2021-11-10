import { ActividadEconomicaVO } from "../../persona/vo/ActividadEconomicaVO";
import { ProfesionVO } from "../../persona/vo/ProfesionVO";
import { TipoPersonaVO } from "../../persona/vo/TipoPersonaVO";

	export class DatosValidRiesgoVO
	{
		public   perId: Number;
		
		public   cpeId: Number;
		
		public   tipoPersonaVO: TipoPersonaVO;  
		
		public   actividadVO: ActividadEconomicaVO;
		
		public   pemFconstitucion:String;
		
		public   pefFNacimiento:String;
		
		public   paiClaveResidencia: Number;
		
		public   profesionVO: ProfesionVO;
		
		public   isPep: String;
		
		public  pefFNacimientoStr : String;
		public  pemFconstitucionStr : String;

		/**
		 * Constructor de la clase.
		 */
		public constructor()
		{
			this.tipoPersonaVO = new TipoPersonaVO();
			this.actividadVO = new ActividadEconomicaVO();
			this.pemFconstitucion = '';
			this.pefFNacimiento = '';
			this.paiClaveResidencia = 0;
			this.profesionVO = new ProfesionVO();
			this.isPep ='';
		}
	}

	