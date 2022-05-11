export class CriterioAnalisisVO{
    /**
     * Id del criterio analisis
     * */
    public craId : number;
    
    /**
     * Id relacion con el craId del criterio analisis
     * */
    public craIdId : number;
    
    /**
     * nombre del criterio analisis
     * */
    public craNombre :  string;
    
    /**
     * descripcion corta del criterio analisis
     * */
    public craDescripcionCorta : string;
    
    /**
     * descripcion del criterio analisis
     * */
    public craDescripcion : string;
    
    /**
     * estatus del criterio analisis
     * */
    public craEstatus : boolean;
    
    /**
     * fecha del criterio analisis
     * */
    public craFecha :  Date;
    
    CriterioAnalisisVO(){
    }
}