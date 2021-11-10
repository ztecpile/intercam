import { DetalleBitacoraProcesoVO } from './DetalleBitacoraProcesoVO';
export class EstatusProcesoFwdVO {
    /**
		 * Almacena Id proceso forward.
		 */
		public  prfId:number;
		
		/**
		 * Almacena descripci&oacute;n del proceso.
		 */
		public  prfDescripcion:string;
		
		/**
		 * Almacena orden del proceso.
		 */
		public  prfOrden:number;
		
		/**
		 * Almacena Id bitacora de procesos.
		 */
		public  bprId:number;
		
		/**
		 * Almacena estatus del proceso.
		 * <table>
		 * <tr><td>OK</td><td>Termin&oacute; con &eacute;xito</td></tr>
		 * <tr><td>ERR</td><td>Termin&oacute; con error</td></tr>
		 * </table>
		 */
		public  bprEstatus:string;
		
		/**
		 * Almacena fecha de inicio del proceso.
		 */
		public  bprFechaInicio:Date;
		
		/**
		 * Almacena fecha de fin del proceso.
		 */
		public  bprFechaFin:Date;
		
		/**
		 * Almacena lista de detalles asociados al proceso.
		 */
		public  detallesBitacoraVO:DetalleBitacoraProcesoVO[] = new Array();
		
		/**
		 * Almacena clave de usuario que ejecuta el proceso.
		 */
		public  usuUsuario:string;
    constructor(
        
    ) {
        
    }
}