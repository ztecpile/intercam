export interface MotivoRemesaVO {
	mreId: number;

	/**
	 * Almacena la descripci&oacute;n del motivo de la Remesa, en espa&ntilde;ol.
	 */
	mreDescripcion: string;

	/**
	 * Almacena la descripci&oacute;n del motivo de la Remesa, en ingles.
	 */
	mreDescripcionEn: string;

	/**
	 * Almacena el estatus del registro.
	 */
	mreEstatus: string;
}