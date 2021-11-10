import { EjecutivoAsistenteIdVO } from "./EjecutivoAsistenteIdVO";

    export class EjecutivoAsistenteVO
    {

        public  idVO : EjecutivoAsistenteIdVO;

        public  asistenteId : number;
        public  ejecutivoId : number;
        public  nombreEjecutivo : string;
        public  estatus : boolean;
        public  sucursal: string;

        /**
        * Constructor de la clase.
        */
        public  EjecutivoAsistenteVO()
        {
            this.idVO = new EjecutivoAsistenteIdVO();
            this.asistenteId= this.idVO.asistenteId;
            this.ejecutivoId= this.idVO.ejecutivoId;
            this.nombreEjecutivo=this.idVO.nombreEjecutivo;
        }
        
        /**
         * Regresa la interpretación en String del objeto.
         */
        public  toString() : string
        {
            return this.idVO.asistenteId.toString() + ',' + this.idVO.ejecutivoId.toString() ;
        }



    }
