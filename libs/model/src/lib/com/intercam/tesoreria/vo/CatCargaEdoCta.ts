import { MapeoCuenta } from './MapeoCuenta';
export class CatCargaEdoCta{

    constructor(
        public mapeoCuenta?:MapeoCuenta,
        public nomArchivo?:String,
        public procesadorFQN?:String,
        public status?:String,
        public bCargaDb?:String,
        public bCargaPos?:String,
        public bCargaSica?:String,
        public empresaId?:number,
        public empresaDesc?:String,
        public banDescCorta?:String
    ){}

}