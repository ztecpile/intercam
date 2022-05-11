import { AsociadoVO } from "./AsociadoVO";

    export class PerEmpleadoVO extends AsociadoVO
    {
        /**
	     * Constructor de la clase.
	     */
        public  PerEmpleadoVO(){}

        public  cveTra : string;
        public  cvePue : string;
        public  cveare : string;
        public  cvedep : string;
        public  cvetno : string;
        public  clvLegadas : string [];
        public  tipNego : number;
		public  tmpClvPro : string;
	}
