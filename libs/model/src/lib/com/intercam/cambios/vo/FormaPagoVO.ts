export class FormaPagoVO {
    
        public fpaId : number;
        
        /**
         * Descripcion de la forma de pago para la Cuenta Origen de las Facturas
         */
        public fpaDesc : string;
		
		/**
		 * Numero de pagos asignados a este tipo de forma de pago
		 * Se utiliza para el control de cuentas origen asignadas/desasignadas a los pagos y 
		 * poder determinar correctamente que se registren para presentarlas en la factura.
		 */
		public fpaNumAsig : number;

constructor(
    
) {
    
}
}