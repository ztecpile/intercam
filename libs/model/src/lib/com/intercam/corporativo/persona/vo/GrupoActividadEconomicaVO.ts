import { SectorActividadEconomicaVO } from "./SectorActividadEconomicaVO";

	export class GrupoActividadEconomicaVO
	{
		public  gacId : Number;
	    public  gruDescripcion : String;
	    public  sectorActividadEconomicaVO : SectorActividadEconomicaVO;
		/**
	    * Constructor de la clase.
	    */
	    public  GrupoActividadEconomicaVO()
	    {
	    	this.gruDescripcion = '';
	    	this.sectorActividadEconomicaVO = new SectorActividadEconomicaVO();
	    }
		
		public  toString():String{
			return this.gruDescripcion;
		}
	}
