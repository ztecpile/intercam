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
		public  descripcionCanal : String;
		/**
		 * Codigo Canal Comercial
		 */
		public  ccaCanalComercial : String;
		/**
		 * Status de Activo o Suspendido
		 * */
		public  ccaEstatus : String;
		/**
		 * Indicador de seleccion
		 * */
		public  isSelected : Boolean;
		/**
		 * Indicador de si es para consulta nada mas
		 * */
		public  readOnly : Boolean;
		
		public constructor()
		{
			this.idVO = new ConCanalComercialIdVO();
			this.isSelected = false;
			this.readOnly = false;
		}
	}
