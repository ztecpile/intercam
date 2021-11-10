

	export class CuentaTerceroVO 
	{
		/**
		 * cuenta de cheques
		 */
		 cuenta:string;
		 /**
		  * Es el nombre completo del cliente ordenado
		  * Si el cliente es tipo (Cli_Tipo) 1 es Cli_RazSoc
		  * Si el cliente es tipo (Cli_Tipo) 2 o 3 es Cli_Titulo + ' ' + Cli_Nombre + ' ' + Cli_ApePat + ' ' + Cli_ApeMat                                                    
		  */
		 comOrdenado:string;
		 /**
		  * Numero de Tipo de Cuenta de Cheques
		  */
		 tipoCta:string;
		 /**
		  * Numero de Moneda
		  */
		 numMoneda:string;		

		/**
	    * Constructor de la clase.
	    */
		public constructor()
	    {
	    }
	}
