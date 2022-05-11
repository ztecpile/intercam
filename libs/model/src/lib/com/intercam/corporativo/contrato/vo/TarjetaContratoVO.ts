import { TarjetaContratoIdVO } from "./TarjetaContratoIdVO";

	export class TarjetaContratoVO
	{
	    
	 
	             
	    public  idVO : TarjetaContratoIdVO;
	    public  usuUsario : string;
	    public  tacFvigenciaStr : string;
	    public  tacMontoMax : number;
	    public  tacFaltaStr : string;
	    public  tarTitular : string;
	    public  tarNumero : string;
	    public  tacEstatus : string;
	    
	    public  tmpCveRepet: number;
	    
	    /**
	    * Constructor de la clase.
	    */
		public constructor()
		{
			this.idVO = new  TarjetaContratoIdVO();
		}
		 
	}
