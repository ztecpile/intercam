import { FactorRiesgoVO } from "./FactorRiesgoVO";

    export class PersonaRiesgoVO
    {
       public  priId: number;
        
        /**
         * Id de la persona
         */
        public  perId: number;
        
        /**
         * numero de contrato con el cual se calculo el riesgo
         */
        public  conId: number;
        
        /**
         * Valores del riesgo: 1= Bajo, 2= Medio, 3= Alto
         */
        public  vriId: number;
        
        /**
         * Tipo de Calculo: C= Calculado, M= Manual, D= Directo
         */
        public  priTcalculo: string;
        
        /**
         * Fecha en la que se realizo el calculo
         */
        public  priFcalculo: Date;
        
        /**
         * Valor del riesgo, 1= Bajo, 2= Medio, 3= Alto
         */
        public  priValor: number;
        
        /**
         * Regla de excepcion que se cumple por calculo del riesgo
         */
        public  priRazon: string;
        
        /**
         * Observaciones para pregunta Manejo de Efectivo o para observaciones de como se realizo el calculo
         */
        public  priObs: string;
        
        /**
         * Usuario que realiza el calculo del riesgo
         */
        public  usuUsuario: string;
        
        /**
         * Factores que componen el riesgo
         */
        //List<FactorRiesgoVO>
        public  listFactorRiesgoVO: FactorRiesgoVO[];
        
        /**
         * Estatus Riesgo
         */
        public   priEstatus: string;
        
        /**
        * Valida si el cuestionario de riesgo es editable
        * */
        public  priCueEdit: string;

    }
