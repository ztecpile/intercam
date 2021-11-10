import { ContratoEjecutivoIdVO } from "./ContratoEjecutivoIdVO";

	export class ContratoEjecutivoVO
	{
		public  idVO : ContratoEjecutivoIdVO;
    	public  conId : Number;
	    public  tejId : Number;
	    public  cejEstatus : String;
	    public  usuUsuario : String;
	    public  cejFaltaStr : String;
	    public  perIdEjec : Number;
    	public  usuClaveEjec : String;
   		public  perNomCortoEjec : String;
    	public  emailEjec : String;
    	public  perNomCortoClie : String;
    	public  tipoCon : String;
    	public  perIdClie : Number;
    	public  sucDescripEjec : String;
    	public  cveubiEjec : Number;
    	public  clvPromLegado : String;
    	public  tpeClaveClie : String;
        
        public  cejPorcentaje:Number;
        public  clvPro:String;


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
