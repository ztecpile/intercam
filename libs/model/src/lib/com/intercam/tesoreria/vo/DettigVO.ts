export class DettigVO{

    constructor(
        public cve_mes : number,
		public clvniv : number,
		public clv_pro : string,
		public clv_suc : string,
		public tipo_aut : string,
		public tip_ope : string,
		public ins_ope : number,
		public ins_opeDesc : string,
		public cl1_gru : number,
		public cl2_gru : number,
		public fix : number,
		public lim_monmax : number,
		public lim_monmaxp : number,
		public lim_monmin : number,
		public lim_monminp : number,
    ){}

}