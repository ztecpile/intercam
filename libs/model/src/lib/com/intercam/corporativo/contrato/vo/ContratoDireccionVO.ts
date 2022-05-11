import { ContratoDireccionIdVO } from "./ContratoDireccionIdVO";

    export class ContratoDireccionVO
    {
        public  idVO:ContratoDireccionIdVO;
        public  codEstatus : string;
        public  dirCalle : string;
        public  dirColonia : string;

        public  tmpCveRepet: number;
        public  codTelefono : string;
        /**
        * Nombre de la persona titular de la direccion
        */
        public  perDesc:string;
        /**
        * Indica si la direccion es de contrato
        */
        public  contrato:boolean;
        /**
        * Indica si la direccion es de estado de cuenta
        */
        public  edoCta:boolean;
        /**
        * Indica si es repetitiva
        */
        public  codEsRepetitiva:string;
		/**
		 * Indica si es direccion de trabajo
		 * */
		public  trabajo : boolean;
		/**
		 * Indica si es direccion de una persona extranjera
		 * */
		public  extranjero : boolean;
		/**
		 * Indica si es direccion de otro tipo
		 * */
		public  otros : boolean;
		/**
		 * Indica el tipo de envio
		 * */
		public  tenDescripcion : string;

		/** 
		 Especifica si un elemento debe de estar seleccionado.
		 */
		public  conSelected : boolean = false; 
		
		/**************************************************************************************
		 * Constructor
		 * **************************************************************************************/
		
        /**
        * Constructor de la clase
        */
        public constructor() {
            this.idVO = new ContratoDireccionIdVO();
        }
		
		public  toString():string{
			return this.tenDescripcion + " Estatus: " + this.codEstatus;
		}
    }
