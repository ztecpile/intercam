export abstract class ConstReferenciacion {
		
    /**
     * Constante <code>ConstReferenciacion.TIPO_SOLICITUD_REFERENCIACION_CLIENTE</code>.</br> 
     * Define el valor de la propiedad <code>tipoSolicitud</code> para una 
     * Solicitud de Referencicaion de Cliente.
     **/
     public static readonly TIPO_SOLICITUD_REFERENCIACION_CLIENTE:String = "RC";
    
    /**
     * Constante <code>ConstReferenciacion.TIPO_SOLICITUD_CLIENTE_REFERENCIADO</code>.</br>
     * Define el valor de la propiedad <code>tipoSolicitud</code> para una 
     * Solicitud de Cliente Referenciado.
     **/
     public static readonly TIPO_SOLICITUD_CLIENTE_REFERENCIADO:String = "CR";
    
    /**
     * Constante <code>ConstReferenciacion.TIPO_DESTINATARIO_DUENO</code> 
     * define el valor de la propiedad <code>tipoDestinatario</code> para el 
     * Ejecutivo dueno.
     **/
     public static readonly TIPO_DESTINATARIO_DUENO:String = "dueno"
    
    /**
     * Constante <code>ConstReferenciacion.TIPO_DESTINATARIO_COACH</code> 
     * define el valor de la propiedad <code>tipoDestinatario</code> para el 
     * Ejecutivo coach.
     **/
     public static readonly TIPO_DESTINATARIO_COACH:String = "coach"
    
    /**
     * Constante <code>ConstReferenciacion.RESPUESTA_SOLICITUD_ACEPTA</code> 
     * define el valor de la propiedad <code>respuestaSolicitud</code> para Acepta Solicitud .
     **/
     public static readonly RESPUESTA_SOLICITUD_ACEPTA:String = "A";
    
    /**
     * Constante <code>ConstReferenciacion.RESPUESTA_SOLICITUD_NO_ACEPTA</code> 
     * define el valor de la propiedad <code>respuestaSolicitud</code> para No Acepta Solicitud.
     **/
     public static readonly RESPUESTA_SOLICITUD_NO_ACEPTA:String = "R";
    
}