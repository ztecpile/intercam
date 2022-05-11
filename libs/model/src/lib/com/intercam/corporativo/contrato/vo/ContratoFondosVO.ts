import { ContratoVO } from "./ContratoVO";

    export class ContratoFondosVO extends ContratoVO
    {
        public  tmpNip : string;
        public  cfoRetieneIsr:boolean;
        public  cfoDirecto:boolean;
        public  cfoInsEspeciales : string;

         /**
        * Constructor de la clase.
        */
        public constructor()
        {
            super();
            this.tmpNip = '';
            this.cfoRetieneIsr = true;
            this.cfoInsEspeciales = null;
        }
    }
