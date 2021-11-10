export class ProcesoFwdVO {
    
		/**
		 * Almacena Id proceso forward.
		 */
		public  prfId:number;
		
		/**
		 * Almacena descripci&oacute;n del proceso.
		 */
		public  prfDescripcion:string;
		
		/**
		 * Almacena tipo de proceso.
		 * <table>
	 	 * <tr><td>APE</td><td>Apertura</td></tr>
	 	 * <tr><td>CIE</td><td>Cierre</td></tr>
	 	 * <tr><td>PCI</td><td>Pre-cierre</td></tr>
	 	 * </table>
		 */	
		public  prfTipo:string;
		
		/**
		 * Almacena orden del proceso.
		 */
		public  prfOrden:number;
		
		/**
		 * Almacena estatus del registro.
		 */
		public  prfEstatus:string;
		
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