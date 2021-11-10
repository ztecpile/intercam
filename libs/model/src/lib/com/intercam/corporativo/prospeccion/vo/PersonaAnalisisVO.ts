export class PersonaAnalisisVO{
		
    /**
     * id de la persona
     * */
    public perId : Number;
    
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
    public craId1 : Number;
    
    /**
     * id2 criterio analisis
     * */
    public craId2 : Number;
    
    /**
     * id3 criterio analisis
     * */
    public craId3 : Number;
    
    /**
     * id4 criterio analisis
     * */
    public craId4 : Number;
    
    /**
     * comentario
     * */
    public peaComentario : String;
    
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
    public peaBloqueada : Boolean;
    
    /**
    * Numero de Contrato
    */ 
    public conId : Number;
    
    /**
    * Id de prospeccion i00prospecto_persona
    */ 
    public prpId : Number;
    
    /**
    * Usuario que genera la tarea
    */ 
    public usuUsuario : String;
    
    PersonaAnalisisVO(){
    }
}