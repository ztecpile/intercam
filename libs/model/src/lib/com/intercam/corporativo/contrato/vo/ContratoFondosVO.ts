
    export class ContratoFondosVO 
    {
        public  tmpNip : String;
        public  cfoRetieneIsr:Boolean;
        public  cfoDirecto:Boolean;
        public  cfoInsEspeciales : String;

         /**
        * Constructor de la clase.
        */
        public constructor()
        {
            
            this.tmpNip = '';
            this.cfoRetieneIsr = true;
            this.cfoInsEspeciales = null;
        }
    }
