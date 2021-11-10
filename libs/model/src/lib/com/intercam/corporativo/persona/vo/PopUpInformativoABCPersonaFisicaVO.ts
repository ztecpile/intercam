
    export class PopUpInformativoABCPersonaFisicaVO
    {
        public  contrato : Number;
        public  negocio : String;
        public  promotor : String;
        public  estatus : String;
        public  cveLegada : String;
        public  perId : Number;
        /**
         * Bandera qeu determina si la informacion del contrato_persona pertenece a una repetitiva o no
         * i00con_persona.cpe_es_repetitiva
         */
        public  cpeEsRepetitiva : Boolean;

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
