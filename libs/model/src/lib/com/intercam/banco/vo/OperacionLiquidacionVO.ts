export class OperacionLiquidacionVO{
    public  oppId:number;
		public  oppFolio: string;
		public  oppFecha:Date;
		public  oppTipo: string;
		public  oppTipLiq: string;
		public  oppProOri: string;
		public  oppProAti: string;
		public  oppSucLiq: string;
		public  oppEntCve: string;
		public  oppEntMon: string;
		public  oppEntCue: string;
		public  oppEntChe: string;
		public  oppEntRef: string;
		public  oppSalCve: string;
		public  oppSalMon: string;
		public  oppSalCue: string;
		public  oppSalChe: string;
		public  oppSalRef: string;
		public  oppMonto:number;
		public  oppUsuAut: string;
		public  oppMotivo: string;
		public  oppTraven: string;
		public  oppStatus: string;
		public  oppNumTrans: string;
		public  oppTransaccion: string;
		public  oppUsuario: string;
		public  oppFechaSis: Date;
		public   oppSucOrigen:string;
		public   oppSucDestino:string;
		public  perid: number;
		public   conid:number;
		public   tipomov:number;
		public   tardes:string;
		public   descripcion:string;
		public   titular:string;
		public   banco:string;
		public   descBanco:string;
		public   descTarjeta:string;
		public   clabe:string;
		public   rfc:string;
		public   rfcBenef:string;
		public   beneficiario:string;
		public  iva:number;
		public  ivaPro:number;
		public  comision:number;
		public  insrec:string;;
		public  consecutivo:string;;
		public  alias:string;;
		public  cueMonto:number;
		public  oppFechaVec:Date;
		public  tasa: number;
		public  isr: number;
		public  tbruta: number;
		public  periodo: number;
		
		public   clvPromotor:string;
		public   nomTercero:string;
		public   concepto:string;
		public   usuBanca:string;
		
		/**
		 * Especifica si un elemento debe de estar seleccionado.
		 */
		public  conSelected : Boolean = false; 
	
		public  descripcionTipoMov:string;
		
		public  oppErrMsg:string;
		
		public  firma1:string;
		//#####################**///
		public  oppOrden: number;
		public   oppCodErr:string;
		public   oppServerTicket:string;
		
		public   oppCliente:string;
		
		public  oppCorreoBenef:string;
		public  oppTipoCarga:string;
}