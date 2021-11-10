export interface CorresponsalRemesaVO{

    /**
		 * Almacena el Id del Banco corresponsal.
		 */
		 cprId: number;
		
		/**
		 * Almacena descripci&oacute;n del Banco corresponsal.
		 */
		 cprDescripcion: string;
		
		/**
		 * Almacena direcci&oacute;n del Banco corresponsal.
		 **/
		 cprDireccion: string;
		
		/**
		 * Almacena correo electr&oacute;nico asociado al Banco corresponsal.
		 **/
		 cprCorreoElectronico: string;
		
		/**
		 * Almacena ubicaci&oacute;n del archivo del logo.
		 */
		 cprPathLogo: string;
		
		/**
		 * Almacena leyendas legales y de las condiciones de uso.
		 */
		 cprLegales: string;
		
		/**
		 * Indica si el Banco corresponsal est&aacute; configurado por default.
		 */
		 cprDefault: boolean;
		
		/**
		 * Almacena el estatus del registro.
		 */
		 cprEstatus: string;

}