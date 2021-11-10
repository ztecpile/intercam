
    export class PromotorSicaVO
    {
        public   clvPro:String;

        public   clvSuc:String;
        public   desPro:String;
        public   porPro:number;
        public   winPro:String;
        public   ex1Pro:number;
        public   calPro:String;
        public   colPro:String;
        public   te1Pro:String;
        public   ex2Pro:number;
        public   cl1Gru:number;
        public   cl2Gru:number;
        public   maiPro:String;
        public   oriPro:String;
        public   staPro:number;
        public   cveubi:number;
        public   sicaUnificar:Boolean;
        public  tconId :Number;
        
        /**
        * Para seleccion en grid
        */
        public  conSelected : Boolean;

        public  PromotorSicaVO(){

        }

        public  toString():String{
            return this.clvPro;
        }
    }
