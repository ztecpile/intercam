import { TipoRiesgoVO } from "./TipoRiesgoVO";
import { ValorRiesgoVO } from "./ValorRiesgoVO";

	export class ContratoRiesgoVO
	{
		public  criId:Number;
		public  tipoRiesgoVO:TipoRiesgoVO = new TipoRiesgoVO();
		public  conId:Number;
		public  criValor:Number;
		public  criEstatus:String;
		public  usuUsuario:String;
		public  criFhalta:Date;
		
		
		
		// public  ContratoRiesgoVO(triDescripcion:String = null, vriDescripcion:String  = null){
		// 	this.tipoRiesgoVO.triDescripcion = triDescripcion;
			
		// 	 valorRiesgo:ValorRiesgoVO = new ValorRiesgoVO();
		// 	valorRiesgo.vriDescripcion = vriDescripcion;
			
		// 	this.tipoRiesgoVO.valorRiesgosVO.addItem(valorRiesgo);
		// }
	}
