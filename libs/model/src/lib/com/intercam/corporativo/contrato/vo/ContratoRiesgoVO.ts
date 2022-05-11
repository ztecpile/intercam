import { TipoRiesgoVO } from "./TipoRiesgoVO";
import { ValorRiesgoVO } from "./ValorRiesgoVO";

	export class ContratoRiesgoVO
	{
		public  criId:number;
		public  tipoRiesgoVO:TipoRiesgoVO = new TipoRiesgoVO();
		public  conId:number;
		public  criValor:number;
		public  criEstatus:string;
		public  usuUsuario:string;
		public  criFhalta:Date;
		
		
		
		// public  ContratoRiesgoVO(triDescripcion:String = null, vriDescripcion:String  = null){
		// 	this.tipoRiesgoVO.triDescripcion = triDescripcion;
			
		// 	 valorRiesgo:ValorRiesgoVO = new ValorRiesgoVO();
		// 	valorRiesgo.vriDescripcion = vriDescripcion;
			
		// 	this.tipoRiesgoVO.valorRiesgosVO.addItem(valorRiesgo);
		// }
	}
