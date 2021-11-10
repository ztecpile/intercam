export class VRentabilidadVO {
    /**
     * Identificador tipo de contrato
     */
     public  tconId:number;
     /**
      * Clave de cliente
      */
     public  clvCli:string;
     /**
      * Anio de consulta
      */
     public  tccAnio:number;
     /**
      * Mes de la consulta
      */
     public  tccMes:number;
     /**
      * Ingreso bruto
      */
     public  ingresoBruto:number;
     /**
      * Costo total
      */
     public  costoTotal:number;
     /**
      * Utilidad neta mensual 
      */
     public  utilidadNeta:number;
     /**
      * Monto parametro utilizado para calcular el campo <code>indicador</code>
      */
     public  parMonto:number;
     /**
      * ind = 0 utilidad Menor a parMonto <br> ind = 1 utilidad Mayor o igual a parMonto <br> ind = -1  utilidad menor a CERO
      */
     public  indicador:number;
     
     /**
      * Clave del promotor dueño del cliente
      */
     public  clvPro:string;
    constructor() {
        
    }
}