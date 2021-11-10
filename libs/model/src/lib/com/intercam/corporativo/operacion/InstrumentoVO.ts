export class InstrumentoVO {
    public   insId : number;
    public   insOrden : number;
    public   insNombre :string ;
    public   insDescripcion : string;
    public   insEstatus :string;
    public   insConfigura :string;
    /**
    * Para seleccion en grid
    */
    public  conSelected : boolean;

    constructor() {
        
    }
}