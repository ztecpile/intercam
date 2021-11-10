import { DatosAdicionalesSolicitudVO, EdoReferenciacionVO, PersonaVO, TipoContratoVO } from "@intercam/model";

export class SolicitudReferenciacionVO 	{
	//--------------------------------------------------------------------------
	//
	//  Properties
	//
	//--------------------------------------------------------------------------
		
	/**
	* Almacena Id Solicitud Referenciacion.
	**/
	public slrId:Number;
		
	/**
	* Almacena Estado Solicitud Referenciacion.
	**/
	public edoReferenciacionVO:EdoReferenciacionVO;
		
	/*[ArrayElementType("com.intercam.corporativo.prospeccion.vo.AvisoSolicitudVO")]*/
	/**
	* Almacena lista de Aviso Solicitud.
	**/
	public avisosSolicitudVO = [];
		
	/**
	* Almacena Fecha Solicitud de Referenciacion.
	**/
	public slrFechaSol:Date;
		
	/**
	* Almacena Fecha Respuesta a Solicitud de Referenciacion.
	**/
	public slrFechaResp:Date;
		
	/**
	* Almacena Persona Cliente.
	**/
	public personaClienteVO:PersonaVO;
		
	/**
	* Almacena Persona que realiza la solicitud.
	**/
	public personaSolicitaVO:PersonaVO;
		
	/**
	* Almacena datos adicionales de persona que realiza la solicitud.
	**/
	public datosAdicionalesPersonaSolicita:DatosAdicionalesSolicitudVO;
		
	/**
	* Almacena Persona Coach de quien realiza la solicitud.
	**/
	public personaCoachSolicitaVO:PersonaVO;
		
	/**
	* Almacena datos adicionales de persona-coach de quien realiza la solicitud.
	**/
	public datosAdicionalesCoachSolicita:DatosAdicionalesSolicitudVO;
		
	/**
	* Almacena Tipo Contrato asociada a la Persona Prospecto. 
	**/
	public tipoContratoVO:TipoContratoVO;
		
	/**
	* Almacena tipo de Solicitud.
	**/
	public slrTipoSol:String;
		
	/**
	* Almacena respuesta a la Solicitud.
	**/
	public slrRespuesta:String;
		
	/**
	* Almacena comentarios de Solicitud.
	**/
	public slrComenSol:String;
		
	/**
	* Almacena comentarios de Respuesta.
	**/
	public slrComenResp:String;
		
	/**
	* Almacena estatus del proceso.
	**/
	public slrEstatusProceso:Number;
        
    /**
    * Alamcena el proceso que ejecuto la respuesta.
    */ 
    public slrProcesoResp:String;
        
    /**
    * Alamcena la url de la imagen a mostrar
    */ 
    public urlImage:String;
        
    /**
    * Alamcena la url de la imagen que identifica el estatus de la solicitud
    */ 
    public urlImgStatusSol:String;
        
    /**
    * Valida si el check esta seleccionado
    **/
    public isSelected:Boolean;
        
    private urlImgTipoSolRecibida : String = "../assets/recibir.png";
    private urlImgTipoSolEnviada : String = "../assets/enviar.png";
        
    private urlImgStSolAprobada : String = "../assets/verde.png";
    private urlImgStSolEspera : String = "../assets/amarillo.png";
    private urlImgStSolRechazada : String = "../assets/rojo.png";
		
	//--------------------------------------------------------------------------
	//
	//  Constructor
	//
	//--------------------------------------------------------------------------
		
	/**
	* Constructor.
	**/
	public SolicitudReferenciacionVO() {
	}
        
    /**
    * Metod mediante el cual se asigna la direccion de la imagen que corresponde a los siguientes tipos de solicitud
    * - Enviada
    * - Espera
    * - Recibida
    */ 
    public getUrlImageTipo(solicitud : SolicitudReferenciacionVO, usuarioPerId : number) : String {
        var urlImageTipo : String;
            
        if (solicitud.avisosSolicitudVO[0].personaDuenoVO.perId == usuarioPerId) {
            urlImageTipo = this.urlImgTipoSolRecibida;
        } else {
            urlImageTipo = this.urlImgTipoSolEnviada;
        }
        return urlImageTipo;
    }
        
    /**
    * Metodo mediante el cual se asigna la direccion de la imagen que corresponde al estatus de la solicitud:
    * - Contestada
    * - Sin Contestar
    */
    public getUrlImageEstatus(solicitud : SolicitudReferenciacionVO, usuarioPerId : number) : String {
        var urlImageEstatus : String;
        if (solicitud.slrFechaResp == null){
                urlImageEstatus = this.urlImgStSolEspera;
        } else if(solicitud.slrRespuesta == 'A'){
                urlImageEstatus = this.urlImgStSolAprobada;
        }else if(solicitud.slrRespuesta == 'R'){
                urlImageEstatus = this.urlImgStSolRechazada;
        }
        return urlImageEstatus;
    }
        
}