import { GrupoActividadEconomicaVO } from "./GrupoActividadEconomicaVO";

	export class ActividadEconomicaVO
	{
		public  actId : number;
	    public  grupoActividadEconomicaVO : GrupoActividadEconomicaVO;
		public  actDescripcion : string;
		public  actClvCnbv : string;
		public  actAltoRiesgo : Number;
		public  actRiesgo : Number;
		public  actRelev : string;
		public  actVulne : string;

		/**
		 * Indica si la actividad es para usuarios
		 */
		public  actFiltroUsu : boolean;

		/**
		 * Clave de la actividad economica sibamex 
		 */
		public  tmpActNumeroClActiv : string;
		/**
	    * Constructor de la clase.
	    */
	    public  ActividadEconomicaVO(){
			this.grupoActividadEconomicaVO = new GrupoActividadEconomicaVO();
			this.actDescripcion = '';
			this.actClvCnbv = '';
			this.actAltoRiesgo = 0;
			this.actRiesgo = 0;
			this.actRelev = '';
			this.actVulne = '';
			this.actId = 0;
	    }
	
}