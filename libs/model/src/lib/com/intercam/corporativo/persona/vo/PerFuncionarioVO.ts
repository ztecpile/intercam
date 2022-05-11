import { BolsaVO } from "../../contrato/vo/BolsaVO";
import { CargoFuncionarioVO } from "./CargoFuncionarioVO";
import { TipoPersonaVO } from "./TipoPersonaVO";

	export class PerFuncionarioVO {
		/**
		 * Id de la persona Moral a la que esta asociado el funcionario.
		 */
		public   perId : number;
		/**
		 * Id del funcionario.
		 */
		public   pfuId : number;
		/**
		 * Nombre del funcionario si es PF.
		 */
		public   pfuNombre : string;
		/**
		 * Apellido Paterno del funcionario si es PF.
		 */
		public   pfuPaterno : string;
		/**
		 * Apellido Materno del funcionario si es PF.
		 */
		public   pfuMaterno : string;
		/**
		 * Tipo de funcionario (Funcionario, Accionista...).
		 */
		public   pfuTipo : string;
		/**
		 * Porcentaje de participaci&oacute;n del accionista.
		 */
		public   pfuPorcentaje : number;
		/**
		 * Clave del pa&iacute;s.
		 */
		public   paiClave : number;
		/**
		 * Consecutivo legado.
		 */
		public   pfuConsecLegado : number;
		/**
		 * Cargo del funcionario.
		 */
		public   cargoFuncionarioVO : CargoFuncionarioVO;
		/**
		 * Tipo de Persona del funcionario.
		 */
		public  tipoPersonaVO : TipoPersonaVO;
		/**
		 * Razon social.
		 */
		public  pfuRazonSocial : string;
		/**
		 * Respuesta de la pregunta ¿Tiene control de las Asambleas generales de accionistas?
		 */
		public  pfuControlAsamblea : boolean;
		/**
		 * Respuesta de la pregunta ¿Tienen derecho a nombrar a la mayor&iacute;a del consejo de Administraci&oacute;n?
		 */
		public  pfuDerechoConsejo : boolean;
		
		/**
		 * RFC del funcionario o acccionista.
		 */
		public  pfuRfc : string;
		
		/**
		 * Codigo ciudadano CURP para nacionales ssn o fm3 o pasaporte o lo que aplique.
		 */
		public  pfuCodigoCiudadano : string;
		
		/**
		 * Llave primaria de la tabla de categoría de persona.
		 */
		public  cpeId : number;
		
		/**
		 * Identificador del País. para la direccion.
		 */
		public  paiClaveDireccion : number;
		
		/**
		 * Domicilio del accionista o funcionario.
		 */
		public  pfuCalle : string;
		
		/**
		 * Numero interior del domicilio.
		 */
		public  pfuNumeroInt : string;
		
		/**
		 * Numero Exterior del domicilio.
		 */
		public  pfuNumeroExt : string;
		
		/**
		 * Codigo postal del domicilio.
		 */
		public  pfuCodigoPostal : string;
		
		/**
		 * Colonia del domicilio.
		 */
		public  pfuColonia : string;
		
		/**
		 * Municipio del domicilio.
		 */
		public  pfuMunicipio : string;
		
		/**
		 * Entidad Federativa o estado del domicilio.
		 */
		public  pfuEntidadFed : string;
		
		/**
		 * Ciudad del domicilio para los casos que aplique.
		 */
		public  pfuCiudad : string;
		
		/**
		 * Telefono del funcionario o accionista.
		 */
		public  pfuTelefono : string;
		
		/**
		 * Extension del telefono del funcionario o accionista.
		 */
		public  pfuExtension : string;
		
		/**
		 * Fax del funcionario o accionista.
		 */
		public  pfuFax : string;
		
		/**
		 * La persona es Pep
		 */ 
		public  pfuEsPep : boolean;
		
		
		
		
		public  perFNacimientoStr : string;
		
		public  perIdShcp : string;
		
		public  perCotBolsa : boolean;
		
		public  bolsaVO :  BolsaVO;
		
		public  perClvPizarra : string;
		
		public  paiClaveFiscal : number;
		
		
		
		/**
		 * Constructor de la clase.
		 */
		public  PerFuncionarioVO(){
			this.pfuNombre = "";
			this.pfuPaterno = "";
			this.pfuMaterno = "";
			this.pfuTipo = "";
			this.cargoFuncionarioVO = new CargoFuncionarioVO;
		}
		
		/**
		 * @return El nombre del funcionario formado por el nombre, apellido paterno y materno en caso de ser PF o solo
		 *         la razon social si es PM.
		 */
		// public  getNombreFuncionario() : string {
		// 	return this.tipoPersonaVO && Const.PERSONA_MORAL == this.tipoPersonaVO.tpeClave ? this.pfuRazonSocial.trim :
		// 		this.pfuNombre.trim + ' ' + this.pfuPaterno.trim + ' ' + 
		// 			this.pfuMaterno.trim;
		// }
	}
