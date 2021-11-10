export class CausaReversoVO {
    
        public carId: number;
        /**
         * Orden en que se presentan las causas
         */
        public carOrden: number;
        /**
         * Descripcion de la Causa de Reverso/Recompra
         */
        public carDescripcion: string;
        /**
         * Nombres de los grupos que tendra habilitada la causa de Reverso/Recompra
         *      [REVERSOSCONTROL, PROMOTORDIVISAS]
         */
        public carGrupo: string;
        /**
         * Tipo de Causa
         *      REV: Reverso
         *      REC: Recompra
         */
        public carTipo: string;
        /**
         * Estatus del registro
         *  AC: Activo
         *  SU: Suspendido
         */
        public carEstatus: string;

    constructor(
        
    ) {
        
    }
}