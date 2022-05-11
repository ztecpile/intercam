export abstract class ConstReferenciacion {
		
    /**
     * Constante <code>ConstReferenciacion.TIPO_SOLICITUD_REFERENCIACION_CLIENTE</code>.</br> 
     * Define el valor de la propiedad <code>tipoSolicitud</code> para una 
     * Solicitud de Referencicaion de Cliente.
     **/
     public static readonly TIPO_SOLICITUD_REFERENCIACION_CLIENTE:string = "RC";
    
    /**
     * Constante <code>ConstReferenciacion.TIPO_SOLICITUD_CLIENTE_REFERENCIADO</code>.</br>
     * Define el valor de la propiedad <code>tipoSolicitud</code> para una 
     * Solicitud de Cliente Referenciado.
     **/
     public static readonly TIPO_SOLICITUD_CLIENTE_REFERENCIADO:string = "CR";
    
    /**
     * Constante <code>ConstReferenciacion.TIPO_DESTINATARIO_DUENO</code> 
     * define el valor de la propiedad <code>tipoDestinatario</code> para el 
     * Ejecutivo dueno.
     **/
     public static readonly TIPO_DESTINATARIO_DUENO:string = "dueno"
    
    /**
     * Constante <code>ConstReferenciacion.TIPO_DESTINATARIO_COACH</code> 
     * define el valor de la propiedad <code>tipoDestinatario</code> para el 
     * Ejecutivo coach.
     **/
     public static readonly TIPO_DESTINATARIO_COACH:string = "coach"
    
    /**
     * Constante <code>ConstReferenciacion.RESPUESTA_SOLICITUD_ACEPTA</code> 
     * define el valor de la propiedad <code>respuestaSolicitud</code> para Acepta Solicitud .
     **/
     public static readonly RESPUESTA_SOLICITUD_ACEPTA:string = "A";
    
    /**
     * Constante <code>ConstReferenciacion.RESPUESTA_SOLICITUD_NO_ACEPTA</code> 
     * define el valor de la propiedad <code>respuestaSolicitud</code> para No Acepta Solicitud.
     **/
     public static readonly RESPUESTA_SOLICITUD_NO_ACEPTA:string = "R";
    
}