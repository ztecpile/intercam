import { CuentaBancoVO } from "./CuentaBancoVO";

export class CuentaContratoIdVO
	{
		 public  cueId:Number;
    	 public  conId:Number;
	     public  perId:Number;
	     public  cpeConsecLegado : Number;
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
		
		public toString():String{
			return " cueId: " + this.cueId +
				   "\n conId: " + this.conId +
				   "\n perId: " + this.perId +
				   "\n cpeConsecLegado: " + this.cpeConsecLegado +
				   this.cuentaBancoVO;
		}
	}
