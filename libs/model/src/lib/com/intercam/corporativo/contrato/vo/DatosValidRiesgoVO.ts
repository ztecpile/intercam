import { ActividadEconomicaVO } from "../../persona/vo/ActividadEconomicaVO";
import { ProfesionVO } from "../../persona/vo/ProfesionVO";
import { TipoPersonaVO } from "../../persona/vo/TipoPersonaVO";

	export class DatosValidRiesgoVO
	{
		public   perId: number;
		
		public   cpeId: number;
		
		public   tipoPersonaVO: TipoPersonaVO;  
		
		public   actividadVO: ActividadEconomicaVO;
		
		public   pemFconstitucion:string;
		
		public   pefFNacimiento:string;
		
		public   paiClaveResidencia: number;
		
		public   profesionVO: ProfesionVO;
		
		public   isPep: string;
		
		public  pefFNacimientoStr : string;
		public  pemFconstitucionStr : string;

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

	