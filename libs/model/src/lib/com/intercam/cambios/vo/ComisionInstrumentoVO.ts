
import { DivisasVO } from '../../corporativo/contrato/vo/DivisasVO';
import { InstrumentoVO } from '../../corporativo/operacion/InstrumentoVO';

export class ComisionInstrumentoVO {
        public  coiId : number;
		public  tconId :  number;

        public  divIdVO: DivisasVO = new DivisasVO();
        public  instrumentoVO : InstrumentoVO = new InstrumentoVO();

        public   coiMn : number;
        public   coiDivisa : number;



        public  coiFaltaStr : String;

        public  usuUsuario :  String;


        constructor(){

        }

}