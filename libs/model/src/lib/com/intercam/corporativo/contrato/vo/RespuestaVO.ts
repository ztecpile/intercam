import { GrupoPreguntaVO } from "./GrupoPreguntaVO";

	export class RespuestaVO
	{
		public  resId : Number;
		public  resControl : Number;
		public  resDescripcion:String;
		public  resOrden : Number;
		public  resLongitud : Number;
		public  preId : Number;	
		public  resValor : String;
		public  rcoId : Number;
		
		public  resDesPosicion : String;//t=Top, L=Left
		
		public  grupoPreguntaVO :Set <GrupoPreguntaVO>;	

        /**
         * Valor de la respuesta.
         */
        public  resPesoPerfil : number;
        
        /**
        * Altura del control que alamcena la respuesta (para los casos de TextArea)
        */ 
        public  resHeight : Number;

     	/**
	     * Constructor de la clase.
	     */
	    public constructor()
	    {
			//this.grupoPreguntaVO = new ArrayCollection();
	    }
	}
