export class ValidaOperacionVO{
    constructor(
        public cliente?:string,
		public divisa?:string,
		public monto?:number,
		public sucursal?:string,
		public tipo?:string,
		public idOperacion?:string,
    ){}
}