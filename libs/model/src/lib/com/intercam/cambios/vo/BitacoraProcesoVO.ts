import { DetalleBitacoraProcesoVO } from './DetalleBitacoraProcesoVO';
import { ProcesoFwdVO } from './ProcesoFwdVO';
export class BitacoraProcesoVO {
    /**
		 * Almacena Id bitacora de procesos.
		 */
		public  bprId:number;
		
		/**
		 * Almacena lista de detalles asociados al proceso.
		 */
		public  detallesBitacoraVO:DetalleBitacoraProcesoVO[] = new Array();
		
		/**
		 * Almacena proceso forward.
		 */
		public  procesoFwdVO:ProcesoFwdVO;
		
		/**
		 * Almacena fecha a procesar.
		 */
		public  bprFechaProceso:Date;
		
		/**
		 * Almacena fecha de inicio.
		 */
		public  bprFechaInicio:Date;
		
		/**
		 * Almacena fecha de fin.
		 */
		public  bprFechaFin:Date;
		
		/**
		 * Almacena estatus del proceso.
		 * <table>
		 * <tr><td>OK</td><td>Termin&oacute; con &eacute;xito</td></tr>
		 * <tr><td>ERR</td><td>Termin&oacute; con error</td></tr>
		 * </table>
		 */
		public  bprEstatus:string;
		
		/**
		 * Almacena clave de usuario que ejecuta el proceso.
		 */
		public  usuUsuario:string;
    constructor() {
        
    }
}