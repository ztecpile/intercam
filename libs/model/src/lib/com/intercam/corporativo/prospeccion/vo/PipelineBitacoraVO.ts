export class PipelineBitacoraVO {

	/**
	 * id de PipelineVO
	 **/
	public pipId: number;

	/**
	 * id de EdoPipelineVO
	 **/
	public epiId: number;

	/**
	 * Nombre de la fase
	 **/
	public fase: string;

	/**
	 * Nombrel del usuario
	 **/
	public usuario: string;

	/**
	 * Descripci&oacuten del tipo de contrato
	 **/
	public tconDescripcion: string;

	/**
	 * Observaciones de la tabla i00pipeline
	 **/
	public pipObservaciones: string;

	/**
	 * Fecha de registro en i00hpipeline
	 */
	public hpiFecha: Date;

	/**
	 * Fecha de registro en i00hpipeline en formato string
	 */
	public hpiFechaStr: string;

	/**
	 * Numero de dias en fase
	 */
	public diasFase: number;


}