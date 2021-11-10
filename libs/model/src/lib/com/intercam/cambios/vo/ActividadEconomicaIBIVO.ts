import { ActividadEconomicaVO } from "../../corporativo/persona/vo/ActividadEconomicaVO";


export interface ActividadEconomicaIBIVO{
    //--------------------------------------------------------------------------
		//
		//  Properties
		//
		//--------------------------------------------------------------------------
		
		/**
		 * Almacena Id de la actividad econ&oacute;mica para el Banco IBI.
		 **/
		 actId: number;
		
		/**
		 * Almacena actividad econ&oacute;mica.
		 **/
		 actividadEconomicaVO: ActividadEconomicaVO;
		
		/**
		 * Almacena usuario que modifica.
		 **/
		 usuUsuario: string;
		
		/**
		 * Almacena estatus del registro.
		 **/
		 actiEstatus: string;

}