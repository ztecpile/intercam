
/**
 * Derechos Reservados de Copia (c) - INTERCAM SERVICIOS FINANCIEROS - 2021.
 * 
 * Informacion sobre la fecha habil a operar
 */



export class InfoFechaHabilVO {
    /**
         * iable local, para poder pasar el parametro entre las finciones 
         * que obtienen la fecha valor "getFechaValor" y la de comparacion "filterFechaValor"
         */
     public  fvaId: number;
        
     /**
      * Fecha habil a operar
      */
     public fechaHabilOperar: Date;
     //public  fechaHabilOperarStr : string;

     /**
      * Indica si el dia de hoy, es habil o no 
      */
     public  fechaHabil : boolean;

     /**
      * Objeto de objetos fechas valores para Divisas (Banco y Casa de Bolsa)
      * Correspondiente al Mapa proveniente de JAVA, en el cual
      *      Llave: No de dias correspondiente a la fecha valor (0->Hoy; 1->24 Hrs; 2->48 Hrs; 3->72 Hrs; 4->96)
      *      Valor: Un objeto FechaValorVO
      */
     public  mapFechaValorDiv: any;
     
     /**
     * Lista de fechas valor para Divisas (Banco y Casa de Bolsa), es decir, 
     * la lista de valores del mapa mapFechaValorDiv
     */
     public  valuesMapFechaValorDiv: any[];
    constructor(
        
    ) {
        

    }
}