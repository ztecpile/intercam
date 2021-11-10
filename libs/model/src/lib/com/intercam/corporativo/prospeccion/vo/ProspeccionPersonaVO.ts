import { PersonaVO } from '../../persona/vo/PersonaVO';
import { TipoContratoVO } from '../../contrato/vo/TipoContratoVO';
import { DireccionVO } from '../../persona/vo/DireccionVO';
import { PersonaMoralVO } from '../../persona/vo/PersonaMoralVO';
import { ProspectoExcepcionesVO } from './ProspectoExcepcionesVO';
export class ProspeccionPersonaVO {
	//--------------------------------------------------------------------------
	//
	//  Properties
	//
	//--------------------------------------------------------------------------

	/**
	 * Almacena Id ProspectoPersona.
	 **/
	public prpId: number;

	/**
	 * Almacena Persona Prospecto.
	 **/
	public personaVO: PersonaVO;

	/**
	 * Almacena Tipo Contrato asociada a la Persona Prospecto. 
	 **/
	public tipoContratoVO: TipoContratoVO;

	/**
	 * Almacena Direccion asociada a la Persona Prospecto.
	 **/
	public direccionVO: DireccionVO;

	/**
	 * Almacena Ejecutivo propietario del Prospecto.
	 **/
	public ejecutivoVO: PersonaVO;

	/**
	 * Almacena Correo Electronico.
	 **/
	public prpEmail: string;

	/**
	 * Almacena Nombre del Contacto.
	 **/
	public prpContacto: string;

	/**
	 * Almacena Comentarios.
	 **/
	public prpComentarios: string;

	/**
	 * Almacena Pagina web.
	 **/
	public prpPaginaweb: string;

	/**
	* Almacena la clave del pais
	*/
	public paisClave: number;

	/**
	 * Almacena contrato del prospecto.
	 **/
	public conId: number;

	/**
	 * Almacena folio del contrato temporal.
	 **/
	public scoId: number;

	/**
	 * Almacena el tipo de imagenes guardadas
	 */
	public prpImgEntrevista: string;

	/**
	* Almacena aquellas excepciones por las cuales no puede ser prospectado un cliente de acuerdo al tipo de Negocio
	*/
	public tpNegociosNoProspectar: ProspectoExcepcionesVO[] = [];

	/**
	* Almacena el numero telefonico de contacto
	*/
	public prpTelefono: string;

	/**
	* Almacena informacion relacionada con la persona moral
	*/
	public personaMoralVO: PersonaMoralVO;

	/**
	* Almacena el tipo de sociedad
	*/
	public pemTipoSoc: string;

	/**
	* Determina si el contrato es de credito, para cuando el tipo de contrato es BANCO
	*/
	public prpEsCreditoBanco: boolean;

	/**
	* Determina si la direccion del prospecto se guardará como direccion nueva
	*/
	public nuevaDireccion: boolean;

	/**
	* Nombre/referencia en caso de ser fideicomiso
	*/
	public prpFideicomiso: string;
}