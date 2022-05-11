import { GrupoPreguntaVO } from "./GrupoPreguntaVO";

	export class RespuestaVO
	{
		public  resId : number;
		public  resControl : number;
		public  resDescripcion:string;
		public  resOrden : number;
		public  resLongitud : number;
		public  preId : number;	
		public  resValor : string;
		public  rcoId : number;
		
		public  resDesPosicion : string;//t=Top, L=Left
		
		public  grupoPreguntaVO : GrupoPreguntaVO[];	

        /**
         * Valor de la respuesta.
         */
        public  resPesoPerfil : number;
        
        /**
        * Altura del control que alamcena la respuesta (para los casos de TextArea)
        */ 
        public  resHeight : number;

		public resVisible: boolean;// esta propiedad se ocupa cuando la respuesta de la pregunta pertenece a grupopregunta

     	/**
	     * Constructor de la clase.
	     */
	    public constructor()
	    {
			//this.grupoPreguntaVO = new ArrayCollection();
	    }
	}
