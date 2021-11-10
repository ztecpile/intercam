import { PaisVO } from "../../centrocostos/vo/PaisVO";

    export class BolsaVO
    {
        
        /**
         * Id bolsa
         */
        public  bolId: number;
        
        /**
         * Pais relacionado a la bolsa
         */
        public  paisVO : PaisVO;
        
        /**
         * Nombre bolsa
         */
        public  bolNomb : string;
        
        /**
         * Descripcion de bolsa
         */
        public  bolDesc : string;
        
        /**
         * Estatus
         */
        public  bolEstatus : string;
		/**
		 * Pais
		 */
		// public  paiDesc : String;
    }
