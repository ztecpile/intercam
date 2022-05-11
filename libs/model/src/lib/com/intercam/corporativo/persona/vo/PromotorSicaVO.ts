
    export class PromotorSicaVO
    {
        public   clvPro:string;

        public   clvSuc:string;
        public   desPro:string;
        public   porPro:number;
        public   winPro:string;
        public   ex1Pro:number;
        public   calPro:string;
        public   colPro:string;
        public   te1Pro:string;
        public   ex2Pro:number;
        public   cl1Gru:number;
        public   cl2Gru:number;
        public   maiPro:string;
        public   oriPro:string;
        public   staPro:number;
        public   cveubi:number;
        public   sicaUnificar:boolean;
        public  tconId :number;
        
        /**
        * Para seleccion en grid
        */
        public  conSelected : boolean;

        public  PromotorSicaVO(){

        }

        public  toString():string{
            return this.clvPro;
        }
    }
