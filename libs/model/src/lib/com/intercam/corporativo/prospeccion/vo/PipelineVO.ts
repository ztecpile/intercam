import { EdoPipelineVO } from './EdoPipelineVO';
import { ProspeccionPersonaVO } from './ProspeccionPersonaVO';

export class PipelineVO {
	/**
	 * Almacena Id Pipeline.
	 **/
	public pipId: number;

	/**
	 * Almacena ProspectoPersona asociada al Pipeline.
	 **/
	public prospectoPersonaVO: ProspeccionPersonaVO;

	/**
	 * Almacena Estatus Pipeline.
	 **/
	public edoPipelineVO: EdoPipelineVO;

	/**
	 * Almacena Fecha Pipeline.
	 **/
	public pipFecha: Date;

	/**
	 * Almacena Observaciones.
	 **/
	public pipObservaciones: string;

	/**
	 * Almacena Clave usuario.
	 **/
	public usuUsuario: string;

	/**
	 * Almacena bandera esta Cotizando.
	 **/
	public pipCotizando: string;

	/**
	 * Almacena nombre corto.
	 **/
	public nombreCorto: string;

	public edrId: number;

	/**
	 * Almacena slrtipo.
	 **/
	// llag cliente Referido o Referenciado
	public slrTipo: string;

	/**
	 * Almacena tipo de contrato.
	 **/
	public tipContrato: string;


	/**
	*  Lista de historico pipeline
	*/
	// public  hPipelineVO : ArrayCollection;

	/**
	* id Prospecto Persona
	**/
	public prpId: number;

	/**
	* Almacena la ultima modificacion que recibio el prospecto
	*/
	public hpiFecha: Date;

	/**
	* Cuando la solicitud es:
	* CR Almacena el perId del Ejecutivo al que le fue enviada la solicitud para prospectar una cliente
	* RC Almacena el perId del Ejecutivo que tomo el cliente de alguien mas, para ser prospectado
	*/
	public perIdSolicita: number;

	/**
	* Cuando la solicitud es:
	* CR Almacena el perId del Ejecutivo dueño del cliente, el cual es el que esta enviando la solicitud
	* RC Almacena el perId del Ejecutivo dueño del cliente tomado para ser prospectado
	*/
	public perIdDueno: number;

	/**
	* Cuando la solicitud es:
	* CR Almacena el nombre del Ejecutivo al que le fue enviada la solicitud para prospectar una cliente
	* RC Almacena el nombre del Ejecutivo que tomo el cliente de alguien mas, para ser prospectado
	*/
	public nomSolicita: string;

	/**
	* Cuando la solicitud es:
	* CR Almacena el nombre del Ejecutivo dueño del cliente, el cual es el que esta enviando la solicitud
	* RC Almacena el nombre del Ejecutivo dueño del cliente tomado para ser prospectado
	*/
	public nomDueno: string;

}