import { ProspeccionPersonaVO, SolicitudReferenciacionVO } from "@intercam/model";

export class CteReferenciadoVO {
	//--------------------------------------------------------------------------
	//
	//  Properties
	//
	//--------------------------------------------------------------------------
		
	/**
	* Almacena Id cliente referenciado.
	**/
	public creId:Number;
		
	/**
	* Almacena prospecto persona.
	**/
	public prospectoPersonaVO:ProspeccionPersonaVO;
		
    /**
    * Almacena el Id de solicitud de referenciacion.
    **/
    public solicitaReferenVO:SolicitudReferenciacionVO;
        
	/**
	* Almacena fecha de referenciacion.
	**/
	public fecha:Date;
		
	/**
	* Almacena observaciones.
	**/
	public creObservaciones:String;
		
	//--------------------------------------------------------------------------
	//
	//  Constructor
	//
	//--------------------------------------------------------------------------
		
	/**
	* Constructor.
	**/
	public CteReferenciadoVO() {
	}
		
}