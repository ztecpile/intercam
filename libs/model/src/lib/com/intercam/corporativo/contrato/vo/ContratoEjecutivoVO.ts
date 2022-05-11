import { ContratoEjecutivoIdVO } from "./ContratoEjecutivoIdVO";

	export class ContratoEjecutivoVO
	{
		public  idVO : ContratoEjecutivoIdVO;
    	public  conId : number;
	    public  tejId : number;
	    public  cejEstatus : string;
	    public  usuUsuario : string;
	    public  cejFaltaStr : string;
	    public  perIdEjec : number;
    	public  usuClaveEjec : string;
   		public  perNomCortoEjec : string;
    	public  emailEjec : string;
    	public  perNomCortoClie : string;
    	public  tipoCon : string;
    	public  perIdClie : number;
    	public  sucDescripEjec : string;
    	public  cveubiEjec : number;
    	public  clvPromLegado : string;
    	public  tpeClaveClie : string;
        
        public  cejPorcentaje:number;
        public  clvPro:string;


		/**
	    * Constructor de la clase.
	    */
		public constructor()
	    {
	    	this.idVO = new ContratoEjecutivoIdVO();
	    	this.tejId  = 0;
	    	this.cejEstatus = '';
	    	this.usuUsuario = '';
	    	//this.cejFaltaStr = ModelUtil.dateTimeToString(new Date());
	    }
	}
