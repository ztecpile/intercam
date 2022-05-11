import { ConCanalComercialIdVO } from "./ConCanalComercialIdVO";

	export class ConCanalComercialVO
	{
		/**
		 * ID Canal Comercial
		 */
		public  idVO : ConCanalComercialIdVO;
		/**
		 * Descripcion Canal Comercial
		 * */
		public  descripcionCanal : string;
		/**
		 * Codigo Canal Comercial
		 */
		public  ccaCanalComercial : string;
		/**
		 * Status de Activo o Suspendido
		 * */
		public  ccaEstatus : string;
		/**
		 * Indicador de seleccion
		 * */
		public  isSelected : boolean;
		/**
		 * Indicador de si es para consulta nada mas
		 * */
		public  readOnly : boolean;
		
		public constructor()
		{
			this.idVO = new ConCanalComercialIdVO();
			this.isSelected = false;
			this.readOnly = false;
		}
	}
