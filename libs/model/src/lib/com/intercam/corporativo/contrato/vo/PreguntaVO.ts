import { RespuestaVO } from "./RespuestaVO";

	export class PreguntaVO
	{
		public  preId : Number;
		public  preDescripcion :String
		public  secId : Number;
		public  preOrden :Number
		public  preFormato :String
		public  preRequerido :String
		public  preNumColumna : Number;
		
		public  preResRenglon : Number;//numero de respuestas agrupadas por renglon 
     		public  preResPosicion : String;//B=Bottom, R=Rigth
		
		public  respuestasVO :Set <RespuestaVO>;
												
	
     	/**
	    * Constructor de la clase.
	    */
	    public constructor()
	    {
    		//this.respuestasVO = new ArrayCollection();
	    }
	}
