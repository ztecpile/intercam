import { CatIndiceVO } from "./CatIndiceVO";

export class IndiceVO {
    //--------------------------------------------------------------------------
		//
		//  Properties
		//
		//--------------------------------------------------------------------------
		
		/**
		 * Almacena Id del &iacute;ndice de Valmer.
		 */
		public  indId:number;
		
		/**
		 * Almacena cat&aacute;logo &iacute;ndice de Valmer.
		 */
		public  catIndiceVO:CatIndiceVO;
		
		/**
		 * Almacena plazo.
		 */
		public  indPlazo:string;
		
		/**
		 * Almacena monto de la tasa.
		 */
		public  indTasa:number;
		
		/**
		 * Almacena fecha de .
		 */
		public  indFechaIndice:Date;
		
		/**
		 * Almacena fecha de carga.
		 */
		public  indFechaCarga:Date;
		
		//--------------------------------------------------------------------------
		//
		//  Constructor
		//
		//--------------------------------------------------------------------------
		constructor() {
			
		}
        

}