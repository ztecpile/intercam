export class PersonaAnalisisVO{
		
    /**
     * id de la persona
     * */
    public perId : number;
    
    /**
     * fecha
     * */
    public peaFecha : Date;
    
    /**
     * fecha paso 1
     * */
    public peaFechaPaso1 : Date;
    
    /**
     * fecha paso 2
     * */
    public peaFechaPaso2 : Date;
    
    /**
     * id1 criterio analisis
     * */
    public craId1 : number;
    
    /**
     * id2 criterio analisis
     * */
    public craId2 : number;
    
    /**
     * id3 criterio analisis
     * */
    public craId3 : number;
    
    /**
     * id4 criterio analisis
     * */
    public craId4 : number;
    
    /**
     * comentario
     * */
    public peaComentario : string;
    
    /**
     * Observaciones que realizan en el paso 1
     */
    public peaObservaPaso1;
    
    /**
     * Observaciones que realizan en el paso 2
     */
    public peaObservaPaso2;
    
    /**
    * Determina el estatus del analisis si la persona se queda bloqueada
    */ 
    public peaBloqueada : boolean;
    
    /**
    * Numero de Contrato
    */ 
    public conId : number;
    
    /**
    * Id de prospeccion i00prospecto_persona
    */ 
    public prpId : number;
    
    /**
    * Usuario que genera la tarea
    */ 
    public usuUsuario : string;
    
    PersonaAnalisisVO(){
    }
}