import { PerCuentaBancoIdVO } from "./PerCuentaBancoIdVO";

	export class PerCuentaBancoVO
	{
	    
	     public  idVO : PerCuentaBancoIdVO;
	     public  cueFaltaStr : String;
	     public  usuUsuario : String;
	     public  titular : String;
	     public  cueClabe : String;
	     public  banNombre : String;
	    
	     public  cueCuentaBan : String;
	     public  banId : Number;
	     public  tmpCveLegada :String;
	     //campo no mapeado, solo se usa en constructor
	     public  tmpCveLegadaBanco:String;
	     
	     public  cueSucursal:String;
	     public  cuePlaza:String;
	     
	     public  cueTipoLiquida:Number;
	     
	     public  cueEsPperativa : Boolean;
         /**
          * Numero de usuario (no esta en base) para propositos de Cumplimiento
          */   
         public  usuId : Number;
	     
		/**
	    * Constructor de la clase.
	    */
		public constructor()
	    {
	    	this.idVO = new PerCuentaBancoIdVO();
	    }

		  public  toString() : String
			    {
			    	return this.idVO.toString();
			    }
	}
