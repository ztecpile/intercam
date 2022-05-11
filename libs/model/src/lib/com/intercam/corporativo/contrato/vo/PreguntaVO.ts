import { RespuestaVO } from "./RespuestaVO";

	export class PreguntaVO
	{
		public  preId : number;
		public  preDescripcion :string
		public  secId : number;
		public  preOrden :number
		public  preFormato :string
		public  preRequerido :string
		public  preNumColumna : number;
		
		public  preResRenglon : number;//numero de respuestas agrupadas por renglon 
     	public  preResPosicion : string;//B=Bottom, R=Rigth
		
		public preVisible: boolean;// esta propiedad se ocupa cunado la pregunta pertenece a grupopregunta

		public  respuestasVO : RespuestaVO[];
	
     	/**
	    * Constructor de la clase.
	    */
	    public constructor()
	    {
    		//this.respuestasVO = new ArrayCollection();
	    }
	}
