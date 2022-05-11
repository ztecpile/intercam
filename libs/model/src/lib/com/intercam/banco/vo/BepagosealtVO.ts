export class BepagosealtVO{
    constructor(

        public cueOrigen?: string,
        public cueDestin?: string,
        public cueMonDes?: string,
        public pagNumSer?: string,
        public pagPlaza?: string,
        public pagRefere?: string,
        public pagSegRef?: string,
        public  cueMonto?: number,
        public pagAlias?: string,
        public pagAutori?: string,
        public parFePrEs?: Date,
        public numTransac2?: string,
        public transaccio?: string,
        public usuario?: string,
        public fechaSis?:Date,
        public sucOrigen?: string,
        public sucDestino?: string,
        public modulo?: string,
        public errCodigo?: string,
        public errMensaj?: string,
        public parFecAct?: Date,
        public numTransac?: string,
        public comision?: number,
        
    ){}
}