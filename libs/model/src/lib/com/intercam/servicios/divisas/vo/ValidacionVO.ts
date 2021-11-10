export class ValidacionVO {
  
    /**
     * booleano que indica si la operacion es valida o no, de no serlo, no se debe permitir la ejecucion de la misma.
     */
    public  operacionValida:boolean;
    /**
     * Monto acumulado de efectivo en USD para el cliente, al momento de la validacion. 
     */
    public  montoAcumulado:number;
    /**
     * Descripcion de la  regla o causa por la cual no podemos aceptar la operacion.
     */
    public  causa:string;
    /**
     * Codigo de error correspondiente a la causa.
     */
    public  errorCode:string;
    /**
     * Monto limite a operar en efectivo, segun el cliente.
     */
    public  montoLimite:number;
    
}