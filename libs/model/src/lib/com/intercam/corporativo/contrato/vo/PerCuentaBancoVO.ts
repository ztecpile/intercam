import { PerCuentaBancoIdVO } from "./PerCuentaBancoIdVO";

	export class PerCuentaBancoVO
	{
	    
	     public  idVO : PerCuentaBancoIdVO;
	     public  cueFaltaStr : string;
	     public  usuUsuario : string;
	     public  titular : string;
	     public  cueClabe : string;
	     public  banNombre : string;
	    
	     public  cueCuentaBan : string;
	     public  banId : number;
	     public  tmpCveLegada :string;
	     //campo no mapeado, solo se usa en constructor
	     public  tmpCveLegadaBanco:string;
	     
	     public  cueSucursal:string;
	     public  cuePlaza:string;
	     
	     public  cueTipoLiquida:number;
	     
	     public  cueEsPperativa : boolean;
         /**
          * Numero de usuario (no esta en base) para propositos de Cumplimiento
          */   
         public  usuId : number;
	     
		/**
	    * Constructor de la clase.
	    */
		public constructor()
	    {
	    	this.idVO = new PerCuentaBancoIdVO();
	    }

		  public  toString() : string
			    {
			    	return this.idVO.toString();
			    }
	}
