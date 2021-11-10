import { GrupoActividadEconomicaVO } from "./GrupoActividadEconomicaVO";

	export class ActividadEconomicaVO
	{
		public  actId : number;
	    public  grupoActividadEconomicaVO : GrupoActividadEconomicaVO;
		public  actDescripcion : String;
		public  actClvCnbv : String;
		public  actAltoRiesgo : Number;
		public  actRiesgo : Number;
		public  actRelev : String;
		public  actVulne : String;

		/**
		 * Indica si la actividad es para usuarios
		 */
		public  actFiltroUsu : Boolean;

		/**
		 * Clave de la actividad economica sibamex 
		 */
		public  tmpActNumeroClActiv : String;
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