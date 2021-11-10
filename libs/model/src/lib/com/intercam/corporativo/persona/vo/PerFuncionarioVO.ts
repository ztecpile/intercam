import { BolsaVO } from "../../contrato/vo/BolsaVO";
import { CargoFuncionarioVO } from "./CargoFuncionarioVO";
import { TipoPersonaVO } from "./TipoPersonaVO";

	export class PerFuncionarioVO {
		/**
		 * Id de la persona Moral a la que esta asociado el funcionario.
		 */
		public   perId : Number;
		/**
		 * Id del funcionario.
		 */
		public   pfuId : Number;
		/**
		 * Nombre del funcionario si es PF.
		 */
		public   pfuNombre : String;
		/**
		 * Apellido Paterno del funcionario si es PF.
		 */
		public   pfuPaterno : String;
		/**
		 * Apellido Materno del funcionario si es PF.
		 */
		public   pfuMaterno : String;
		/**
		 * Tipo de funcionario (Funcionario, Accionista...).
		 */
		public   pfuTipo : String;
		/**
		 * Porcentaje de participaci&oacute;n del accionista.
		 */
		public   pfuPorcentaje : Number;
		/**
		 * Clave del pa&iacute;s.
		 */
		public   paiClave : Number;
		/**
		 * Consecutivo legado.
		 */
		public   pfuConsecLegado : Number;
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
		public  pfuRazonSocial : String;
		/**
		 * Respuesta de la pregunta ¿Tiene control de las Asambleas generales de accionistas?
		 */
		public  pfuControlAsamblea : Boolean;
		/**
		 * Respuesta de la pregunta ¿Tienen derecho a nombrar a la mayor&iacute;a del consejo de Administraci&oacute;n?
		 */
		public  pfuDerechoConsejo : Boolean;
		
		/**
		 * RFC del funcionario o acccionista.
		 */
		public  pfuRfc : String;
		
		/**
		 * Codigo ciudadano CURP para nacionales ssn o fm3 o pasaporte o lo que aplique.
		 */
		public  pfuCodigoCiudadano : String;
		
		/**
		 * Llave primaria de la tabla de categoría de persona.
		 */
		public  cpeId : Number;
		
		/**
		 * Identificador del País. para la direccion.
		 */
		public  paiClaveDireccion : Number;
		
		/**
		 * Domicilio del accionista o funcionario.
		 */
		public  pfuCalle : String;
		
		/**
		 * Numero interior del domicilio.
		 */
		public  pfuNumeroInt : String;
		
		/**
		 * Numero Exterior del domicilio.
		 */
		public  pfuNumeroExt : String;
		
		/**
		 * Codigo postal del domicilio.
		 */
		public  pfuCodigoPostal : String;
		
		/**
		 * Colonia del domicilio.
		 */
		public  pfuColonia : String;
		
		/**
		 * Municipio del domicilio.
		 */
		public  pfuMunicipio : String;
		
		/**
		 * Entidad Federativa o estado del domicilio.
		 */
		public  pfuEntidadFed : String;
		
		/**
		 * Ciudad del domicilio para los casos que aplique.
		 */
		public  pfuCiudad : String;
		
		/**
		 * Telefono del funcionario o accionista.
		 */
		public  pfuTelefono : String;
		
		/**
		 * Extension del telefono del funcionario o accionista.
		 */
		public  pfuExtension : String;
		
		/**
		 * Fax del funcionario o accionista.
		 */
		public  pfuFax : String;
		
		/**
		 * La persona es Pep
		 */ 
		public  pfuEsPep : Boolean;
		
		
		
		
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
