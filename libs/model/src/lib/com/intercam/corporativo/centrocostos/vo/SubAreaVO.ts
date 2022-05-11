export class SubAreaVO {
    public sarClave : number;
    public sarDescripcion : string;
    public sarEstatus : boolean;
    public tmpClaveOld : number;
    public tmpClaveOldSuc : number;
        
    /**
    * Constructor de la clase.
    */
    public constructor(){
        this.sarDescripcion = '';
        this.sarEstatus = true;
    }
}