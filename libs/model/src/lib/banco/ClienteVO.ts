export class ClienteVO{

	
    /**
		 * numero de cliente
		 */
		public  numero:string;
		/**
		 * sucursal
		 */
		public  sucursal:string;
		/**
		 * nombre cliente
		 */
		public  nombre:string;
		/**
		 * Tipo de Personalidad del Cliente
		 '1'.- Persona Moral
		 '2'.- Persona Fisica Con Actividad Empresarial
		 '3'.- Persona Fisica Sin Actividad Empresarial
		 */
		public  tipo:string;
		/**
		 * NÊmero de Sector al que pertenece el cliente
		 */
		public  sector:string;
		/**
		 * NÊmero de Actividad del Cliente
		 */
		public  actividad:string;
		/**
		 * Titulo del Cliente, Ej. Ing., Sr., Lic, Etc
		 */
		public  titulo:string;
		/**
		 * Registro Federal de Contribuyentes del Cliente
		 */
		public  rfc:string;
		/**
		 * Nombre completo del Cliente
		 * Si el cliente es tipo (Cli_Tipo) 1 es Cli_RazSoc
		 * Si el cliente es tipo (Cli_Tipo) 2 o 3 es Cli_ApePat + ' ' + Cli_ApeMat + ' ' + Cli_Nombre
		 */
		public  nomCompleto:string;
		/**
		 * Nacionalidad del cliente
		 * 'N' = Nacional
		 * 'E' = Extranjero
		 */
		public  nacionalidad:string;
		/**
		 * tipo de consulta
		 */
		public  tipoConsulta:string;
		

}