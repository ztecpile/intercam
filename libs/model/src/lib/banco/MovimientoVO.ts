export class MovimientoVO {
    public  referenciaMovimiento : String;
		public  descripcion : String;
		public  naturaleza : String;
		public  cantidad : Number;
		public  fechaMovimiento : String;
		public  saldo : Number;
		public  origen : String;
		public  sucursal : String;
		public  movNumero : String;
		public  movTipo : String;
		public  descTipoMov : String;
		public  movCuenta: String;
		public  consecutivo: String;
		//Este atributo tiene el mismo valor que fechaMovimiento, pero es de tipo Date para fines de ordenamiento.
		public  fecha: Date;
		public  fechaSis: Date;
		public  medioId: number;
		
}