import { TarjetaContratoIdVO } from "./TarjetaContratoIdVO";

	export class TarjetaContratoVO
	{
	    
	 
	             
	    public  idVO : TarjetaContratoIdVO;
	    public  usuUsario : String;
	    public  tacFvigenciaStr : String;
	    public  tacMontoMax : Number;
	    public  tacFaltaStr : String;
	    public  tarTitular : String;
	    public  tarNumero : String;
	    public  tacEstatus : String;
	    
	    public  tmpCveRepet: Number;
	    
	    /**
	    * Constructor de la clase.
	    */
		public constructor()
		{
			this.idVO = new  TarjetaContratoIdVO();
		}
		 
	}
