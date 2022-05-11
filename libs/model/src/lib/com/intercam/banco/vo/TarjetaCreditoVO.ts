export class TarjetaCreditoVO{
    constructor(
		public usuarioAdmon?: string,
		public usuario?: string,
		public numTarjeta?: string,
		public tipoConsul?: string,
		public nomTitular?: string,
		public descripcion?: string,
		public banco?: string,
		public tipo?: string,
		public tipoTarjeta?: string,
		public montoMaximo?: number,
		public consecutivo ?: string
    ){}
}