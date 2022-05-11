import { PerfilServicioId } from "./PerfilServicioId";
import { ServicioInversion } from "./ServicioInversion";

export class PerfilServicio {
    /**
     * Id del perfil de Servicios.
     */
    public id : PerfilServicioId;
    
    /**
     * Indica si el campo de Accertor est&aacute; visible.
     */
    public pseAccertor : boolean;
    
    /**
     * Servicio de Inversi&oacute;n. En caso de que no se cargue la clase completa (lazy = 'proxy') sera null.
     */
    public servicioInversion : ServicioInversion;
    
    /**
     * Determina si el servicio se muestra para cuando el cliente Opera Mercado de Dinero
     */ 
    public pseOperaMd : boolean;
    
    /**
     *Determina si el servicio se muestra para cuando el cliente Opera Fondos al Banco 
     */ 
    public pseOperaFondos : boolean;
    
    /**
     *Determina si se muestra el formato de srvicios de inversion 
     */ 
    public pseFormatoSi : boolean;
    
    /**
     * Cosntructor.
     */
    public PerfilServicio(){
    }
}