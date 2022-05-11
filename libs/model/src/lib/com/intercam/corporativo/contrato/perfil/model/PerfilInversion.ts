import { PerfilInversionId } from "./PerfilInversionId";

export class PerfilInversion {
    /**
    * Llave compuesta del perfil de Inversi&oacute;n.
    */
    public  id : PerfilInversionId;
        
    /**
    * Descripci&oacute;n del perfil de Inversi&ocute;n.
    */
    public  pinDescrip : string;
        
    /**
    * Puntaje m&aacute;ximo del perfil.
    */
    public  pinPuntaje : number;
        
    /**
    * Determina si este perfil es calculado por el valor de las respuestas de cuestionario (true) o es asignado por el
    * promotor (false).
    */
    public  pinCalculaPerfil : boolean;
        
    /**
    * Asociaci&oacute;n de los servicios del perfil.
    */
    public  perfilServicios : any[];
        
    /**
    * Determina si el servicio se muestra para cuando el cliente Opera Mercado de Dinero
    */ 
    public  pinOperaMd : boolean;
        
    /**
    *Determina si el servicio se muestra para cuando el cliente Opera Fondos al Banco 
    */ 
    public  pinOperaFondos : boolean;
        
    /**
    * Constructor.
    */
    public PerfilInversion(){
    }
}