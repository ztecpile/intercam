import { ContratoDireccionIdVO } from "./ContratoDireccionIdVO";

    export class ContratoDireccionVO
    {
        public  idVO:ContratoDireccionIdVO;
        public  codEstatus : String;
        public  dirCalle : String;
        public  dirColonia : String;

        public  tmpCveRepet: Number;
        public  codTelefono : String;
        /**
        * Nombre de la persona titular de la direccion
        */
        public  perDesc:String;
        /**
        * Indica si la direccion es de contrato
        */
        public  contrato:Boolean;
        /**
        * Indica si la direccion es de estado de cuenta
        */
        public  edoCta:Boolean;
        /**
        * Indica si es repetitiva
        */
        public  codEsRepetitiva:String;
		/**
		 * Indica si es direccion de trabajo
		 * */
		public  trabajo : Boolean;
		/**
		 * Indica si es direccion de una persona extranjera
		 * */
		public  extranjero : Boolean;
		/**
		 * Indica si es direccion de otro tipo
		 * */
		public  otros : Boolean;
		/**
		 * Indica el tipo de envio
		 * */
		public  tenDescripcion : String;

		/** 
		 Especifica si un elemento debe de estar seleccionado.
		 */
		public  conSelected : Boolean = false; 
		
		/**************************************************************************************
		 * Constructor
		 * **************************************************************************************/
		
        /**
        * Constructor de la clase
        */
        public constructor() {
            this.idVO = new ContratoDireccionIdVO();
        }
		
		public  toString():String{
			return this.tenDescripcion + " Estatus: " + this.codEstatus;
		}
    }
