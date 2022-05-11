
    export class PopUpInformativoABCPersonaFisicaVO
    {
        public  contrato : number;
        public  negocio : string;
        public  promotor : string;
        public  estatus : string;
        public  cveLegada : string;
        public  perId : number;
        /**
         * Bandera qeu determina si la informacion del contrato_persona pertenece a una repetitiva o no
         * i00con_persona.cpe_es_repetitiva
         */
        public  cpeEsRepetitiva : boolean;

        /**
        * Constructor de la clase.
        */
        public  PopUpInformativoABCPersonaFisicaVO()
        {
            this.negocio = '';
            this.promotor = '';
            this.estatus = '';
            this.cveLegada = '';
        }
    }
