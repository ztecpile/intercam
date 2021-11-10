import { DatosAdicionalesSolicitudVO, PersonaVO, SolicitudReferenciacionVO } from "@intercam/model";

export class AvisoSolicitudVO {
	//--------------------------------------------------------------------------
	//
	//  Properties
	//
	//--------------------------------------------------------------------------
				
    /**
	* Almacena Id Aviso Solicitud. 
	**/
	public avsId:Number;
				
	/**
	* Almacena Solicitud Referenciacion asociada.
	**/
	public solicitudReferenciacionVO:SolicitudReferenciacionVO;
				
	/**
	* Almacena persona dueno del cliente.
	**/
	public personaDuenoVO:PersonaVO;
		
	/**
	* Almacena datos adicionales de persona dueno del cliente.
	**/
	public datosAdicionalesPersonaDueno:DatosAdicionalesSolicitudVO;
				
	/**
	* Almacena Persona Coach del dueno del cliente.
	**/
	public personaCoachDuenoVO:PersonaVO;
		
	/**
	* Almacena datos adicionales de persona-coach del dueno del cliente.
	**/
	public datosAdicionalesCoachDueno:DatosAdicionalesSolicitudVO;
    
	//--------------------------------------------------------------------------
	//
	//  Constructor
	//
	//--------------------------------------------------------------------------
		
	/**
	* Constructor.
	**/
	public AvisoSolicitudVO() {	
	}
		
}