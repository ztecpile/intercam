import { AsociadoVO } from "./AsociadoVO";

    export class PerEmpleadoVO extends AsociadoVO
    {
        /**
	     * Constructor de la clase.
	     */
        public  PerEmpleadoVO(){}

        public  cveTra : String;
        public  cvePue : String;
        public  cveare : String;
        public  cvedep : String;
        public  cvetno : String;
        public  clvLegadas : string [];
        public  tipNego : number;
		public  tmpClvPro : String;
	}
