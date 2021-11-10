import { FactorRiesgoVO } from "./FactorRiesgoVO";

    export class PersonaRiesgoVO
    {
       public  priId: Number;
        
        /**
         * Id de la persona
         */
        public  perId: Number;
        
        /**
         * numero de contrato con el cual se calculo el riesgo
         */
        public  conId: Number;
        
        /**
         * Valores del riesgo: 1= Bajo, 2= Medio, 3= Alto
         */
        public  vriId: Number;
        
        /**
         * Tipo de Calculo: C= Calculado, M= Manual, D= Directo
         */
        public  priTcalculo: String;
        
        /**
         * Fecha en la que se realizo el calculo
         */
        public  priFcalculo: Date;
        
        /**
         * Valor del riesgo, 1= Bajo, 2= Medio, 3= Alto
         */
        public  priValor: Number;
        
        /**
         * Regla de excepcion que se cumple por calculo del riesgo
         */
        public  priRazon: String;
        
        /**
         * Observaciones para pregunta Manejo de Efectivo o para observaciones de como se realizo el calculo
         */
        public  priObs: String;
        
        /**
         * Usuario que realiza el calculo del riesgo
         */
        public  usuUsuario: String;
        
        /**
         * Factores que componen el riesgo
         */
        //List<FactorRiesgoVO>
        public  listFactorRiesgoVO: FactorRiesgoVO[];
        
        /**
         * Estatus Riesgo
         */
        public   priEstatus: String;
        
        /**
        * Valida si el cuestionario de riesgo es editable
        * */
        public  priCueEdit: String;

    }
