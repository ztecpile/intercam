export class TipoForwardVO {
    //--------------------------------------------------------------------------
		//
		//  Properties
		//
		//--------------------------------------------------------------------------
		
		/**
		 * Identificador de la mesa
		 **/
		public  cveMesa:number;
		
		/**
		 * Identificador de la divisa
		 **/
		public  divId:string;
		
		/**
		 * Identificador del Instrumento
		 **/
		public  insId:number;
		
		/**
		 * Numero de dias correspondientes al plazo
		 **/
		public  plazoDias:number;
		
		/**
		 * Fecha de registro del tipo de cambio
		 **/
		public  tfFecha:Date;
		
		/**
		 * Puntos forward para compra
		 **/
		public  tfPtoCompra:number;
		
		/**
		 * Puntos forward para venta
		 **/
		public  tfPtoVenta:number;
		
		/**
		 * Tipo de cambio Forward Compra
		 **/
		public  tfTcCompra:number;
		
		/**
		 * Tipo de cambio forward Venta
		 **/
		public  tfTcVenta:number;

        /**
         * Identificador del plazo base forward (ejem. 1M),
         * unicamente para fines de su uso en flex,
         * para el resto el default sera ALL
         */
        public  idPlazo:string;
        
        /**
         * Puntos forward compra Originales
         * de Reuters sin spread mesa
         * solo para su uso en flex
         */
        public  tfPtoCompraOrg:number;
        
        /**
         * Puntos forward venta Originales
         * de Reuters sin spread mesa
         * solo para su uso en flex
         */
        public  tfPtoVentaOrg:number;
        
        /**
        * Descripcion del tipo de operacion que se esta realizando Compara o Venta
        * Propiedad no persistida para facilitar la funcionalidad de la informacion
        **/
        public  opiTipo: string;
        
        /**
         * Valor del SPOT para la VENTA
         * Valor no persistido
         **/
        public  spotVenta: number;
        
        /**
         * Valor del SPOT para la COMPRA)
         * Valor no persistido
         **/
        public  spotCompra: number;
		
		/**
		 * Tasa domestica implicita Venta
		 * Valor no persistido por solo presentarse
		 * en la calculadora
		 */
		public  tfTdiCompra: number;
		
		/**
		 * Tasa domestica implicita Venta
		 * Valor no persistido por solo presentarse
		 * en la calculadora
		 */
		public  tfTdiVenta: number;
		
		/**
		 * Middle Price de los puntos forward
		 * Valor no persistido por solo presentarse
		 * en la calculadora     
		 */
		public  tfMidPtosFwd: number;
		
		/**
		 * Middle Price del tipo cambio forward
		 * Valor no persistido por solo presentarse
		 * en la calculadora     
		 */
		public  tfMidTipoFwd: number;
		
		/**
		 * Middle Price de la tasa domestica implicita
		 * Valor no persistido por solo presentarse
		 * en la calculadora     
		 */
		public  tfMidTdi: number;		

		/**
		 * Indica el orden que llevan los plazos, no se relaciona dire
		 **/
		public  plazoSecuencia: number;


        constructor() {
            
        }

}