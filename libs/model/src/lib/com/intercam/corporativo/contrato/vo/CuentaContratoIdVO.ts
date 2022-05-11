import { CuentaBancoVO } from "./CuentaBancoVO";

export class CuentaContratoIdVO
	{
		 public  cueId:number;
    	 public  conId:number;
	     public  perId:number;
	     public  cpeConsecLegado : number;
		 public  cuentaBancoVO : CuentaBancoVO;
	     
		/**
		* Constructor de la clase.
		*/
		public constructor()
		{
			this.cuentaBancoVO = new CuentaBancoVO();
		}
		
		/**
		 * Obtiene la representación String del objeto.
		 */  
		
		public toString():string{
			return " cueId: " + this.cueId +
				   "\n conId: " + this.conId +
				   "\n perId: " + this.perId +
				   "\n cpeConsecLegado: " + this.cpeConsecLegado +
				   this.cuentaBancoVO;
		}
	}
