export class ExpedienteVO {
    public  expId: number;
    public  expFRecepcion: Date;
    public  expCaduca: boolean;
    public  expFCaducidad: Date;
    public  expUbicacion: string;
    public  docId: number;
    public  docReferencia: string;
    public  perId: number;
    public  expFAlta: Date;
    public  docDescripcion: string;
    public  paiClave: number;        //pai_clave: Pais que emite el document: numbero
    public  expEstado;        //exp_estado: Estado, provincia o subdivisión que emite el documento
    public  expFexpedicion: Date;     //exp_fexpedicion: Fecha de expedición del documento
    public  expObservaciones: string; //exp_observaciones: Observaciones o comentarios al documento
    /**
     * Contiene el id del contrato
     */
    public  conId: number;
    /**
     * Contiene el estatus del expediente
     */
    public  staId: number;
    
    /**
     * Determina si el documento ya se encuentra digitalizado
     */
    public docDigitalizado: boolean;

    constructor() {
        
    }
}