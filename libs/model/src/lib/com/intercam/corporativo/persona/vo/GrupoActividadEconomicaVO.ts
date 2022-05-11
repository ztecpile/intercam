import { SectorActividadEconomicaVO } from "./SectorActividadEconomicaVO";

	export class GrupoActividadEconomicaVO
	{
		public  gacId : number;
	    public  gruDescripcion : string;
	    public  sectorActividadEconomicaVO : SectorActividadEconomicaVO;
		/**
	    * Constructor de la clase.
	    */
	    public  GrupoActividadEconomicaVO()
	    {
	    	this.gruDescripcion = '';
	    	this.sectorActividadEconomicaVO = new SectorActividadEconomicaVO();
	    }
		
		public  toString():string{
			return this.gruDescripcion;
		}
	}
