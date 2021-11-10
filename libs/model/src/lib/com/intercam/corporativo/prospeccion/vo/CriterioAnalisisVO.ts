export class CriterioAnalisisVO{
    /**
     * Id del criterio analisis
     * */
    public craId : Number;
    
    /**
     * Id relacion con el craId del criterio analisis
     * */
    public craIdId : Number;
    
    /**
     * nombre del criterio analisis
     * */
    public craNombre :  String;
    
    /**
     * descripcion corta del criterio analisis
     * */
    public craDescripcionCorta : String;
    
    /**
     * descripcion del criterio analisis
     * */
    public craDescripcion : String;
    
    /**
     * estatus del criterio analisis
     * */
    public craEstatus : Boolean;
    
    /**
     * fecha del criterio analisis
     * */
    public craFecha :  Date;
    
    CriterioAnalisisVO(){
    }
}