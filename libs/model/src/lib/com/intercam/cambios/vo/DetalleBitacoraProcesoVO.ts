export class DetalleBitacoraProcesoVO {

    
		/**
		 * Almacena Id detalle bitacora de procesos.
		 */
		public  dbpId:number;
		
		/**
		 * Almacena Id de la bitacora al que esta asociado el detalle.
		 */
		public  bprId:number;
		
		/**
		 * Almacena detalle de la operaci&oacute;n.
		 */
		public  dbpOperacion:string;
		
		/**
		 * Almacena fecha de registro.
		 */
		public  dbpFecha:Date;
		
		/**
		 * Almacena descripci&oacute;n del detalle.
		 */
		public  dbpDescripcion:string;
		
		//--------------------------------------------------------------------------
		//
		//  Constructor
		//
		//--------------------------------------------------------------------------
		
		/**
		 * Constructor.
		 **/
    constructor(
        
    ) {
        
    }
}