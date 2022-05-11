

export class BusquedaCPEvent {

   /* constructor(type:string){
       
        super(type);
    }*/

   /* public BusquedaCPEvent(type:string, bubbles:Boolean=false, cancelable:Boolean=false)
    {
        
    }*/

     /**
         * El código psotal válido.
         */
      codigoPostal : string;
      /**
       * La entidad a la que pertenece el código postal.
       */
      entidad : string;
      /**
       * El municipio al que pertenece el código postal.
       */
      municipio : string;
      /**
       * La clave de la Comisión Nacional Bancaria del municipio al que pertenece el código postal.
       */
      municipioClave : string;
      /**
       * La colonia a la que pertenece el código postal.
       */
      colonia : string;
      /**
       * La lista de colonias que pertenecen al código postal.
       */
      colonias : any = new Array();
      /**
       * El nombre de la propiedad type del evento.
       */
      CODIGO_POSTAL_VALIDO : string = 'codigoPostalValido';
      /**
       * Ciudad a la que pertenece el codigo postal
       */
      ciudad : string;
      
      /**
      * entClave asignada a la entidad seleccionada
      */ 
      entClave : number;
      
      /**
       * codigo de entidad para broxel
       */
      entIsoCodeBrx: string;
      
      /**
       * codigo de ciudad para broxel
       */
      colCityCodeBrx: string;
}