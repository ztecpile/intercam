export class AreaVO {
    public areaClave : number;
    public areDescripcion : String;
    public areResp : number;
    public tmpClaveOld : number;
    public tmpClaveOldSuc : number;

    /**
    * Constructor de la clase.
    */
    public constructor() {
        this.areDescripcion = '';
        this.areResp = 0;
    }
}