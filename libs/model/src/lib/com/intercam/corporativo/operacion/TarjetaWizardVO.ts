import { OperacionVO } from "@intercam/model";
import { PersonaContratoVO } from '../persona/vo/PersonaContratoVO';

export interface TarjetaWizardVO {

      operacionVO:OperacionVO;
	
	paramtrosFix: string[];
	
	  fix:number;
	
	  constanteFraccion:number;
	
	  valorFix:number;
	
	  maxYearTar:number;
	
	  actESucursalUVentanilla:boolean;
	
	  opiTipo: string;
	
	  personaContrato:PersonaContratoVO;
	
	  tarjetaSaldoUsuVent:number;
	
	  recargaMaxUsuVent:number;
	
	  montoMinimo:number;
	
	  valorFixUSD:number;
	
	  valorDivisa:number;
	
	  montoDolarizado:number;
	
	 lstGpoEjecutivoSucursal:string [];
	
	  isEjecutivoSucursal:boolean;
	
	  isUsuarioVentanilla:boolean;
	
	  eSucursalUVentanilla:boolean;
}