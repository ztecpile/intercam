export class CajeroAtmVO{

    constructor(
		public numero ?:number,
		public tipoRegistro ?:number,
		public clave ?:string,
		public descripcion ?:string,
		public sucursal ?:string,
		public status ?:string,
		public esAeropuerto ?:string,
		public moneda ?:string,
		public esquemaId ?:number,
		public descripcionEsquema ?:string,
		public iva ?:number,
		public surcharge ?:number,
		public comision ?:number,
		public comisionConsultaNac ?:number,
		public comisionRetiroNac ?:number,
		public comisionRetiroInt ?:number,
		public comisionVentaUsdConsultaNac ?:number,
		public comisionVentaUsdRetiroNac ?:number,
		public usdRetiroInt ?:number,
		public comisionUsdTxn ?:number,
		public comisionIntercam ?:number,
		public comisionCashola ?:number,
		public cuentaContable ?:string
    ){}
}