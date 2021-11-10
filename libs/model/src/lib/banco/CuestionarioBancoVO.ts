export interface CuestionarioBancoVO {
        /**
		 * Folio de cuestionario  
		 */ 
		folio? : string;
		/**
		 * Pregunta  
		 */ 
		pregunta? : string;
		/**
		 * Respuesta
		 */ 
		respuesta? : string;
		/**
		 * Valor de la pregunta 
		 */ 
		valor? : number;
		/**
		 * Valoracion de la respuesta dada por el cliente
		 */ 
		validacion? :number;  
		/**
		 * Tipo cliente F=fisica M=moral 
		 */ 
		tipoCliente? : string;
		/**
		 * Telefono de donde se recibe la llamada del cliente. 
		 */ 
		telefono? : string;
		/**
		 * Extension del ejecutivo que atiende la llamada. 
		 */ 
		extension ?: string;
		/**
		 * Fecha
		 */ 
		fecha? : string;
		/**
		 * Hora
		 */ 
		hora? : string;

}