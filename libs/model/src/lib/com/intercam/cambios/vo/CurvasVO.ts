import { DivisasVO } from '../../corporativo/contrato/vo/DivisasVO';
export class CurvasVO {
    //--------------------------------------------------------------------------
		//
		//  Properties
		//
		//--------------------------------------------------------------------------
		
		/**
		 * Almacena Id de Curva de Valmer.
		 */
		public  curId:number;
		
		/**
		 * Almacena plazo de la curva.
		 */
		public  curPlazo:number;
		
		/**
		 * Almacena monto tasa local.
		 */
		public  curTasaLocal:number;
		
		/**
		 * Almacena monto tasa foreanea.
		 */
		public  curTasaForanea:number;
		
		/**
		 * Almacena monto CD foranea.
		 **/
		public  curCdForanea:number;
		
		/**
		 * Almacena valor Fix.
		 */
		public  curFix:number;
		
		/**
		 * Almacena fecha de carga.
		 **/
		public  curFechaCarga:Date;
		
		/**
		 * Fecha de la curva.
		 */
		public  curFechaCurva:Date;
		
		/**
		 * Almacena Divisa.
		 */
		public  divisasVO:DivisasVO;
		
		/**
		 * Almacena los puntos Fwd.
		 */
		public  curPtosFwd:number;
		
		/**
		 * Almacena el tipo cambio Fwd.
		 */
		public  curTipocamFwd:number;
		
		//--------------------------------------------------------------------------
		//
		//  Constructor
		//
		//--------------------------------------------------------------------------
        constructor() {
            
        }

}