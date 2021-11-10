import { PreguntaVO } from "./PreguntaVO";

	export class GrupoPreguntaVO
	{
		public  gppId : Number;
		public  preguntaVO:PreguntaVO;
		public  resId :Number;		
		
     	/**
	    * Constructor de la clase.
	    */
	    public constructor()
	    {
	    	this.preguntaVO = new PreguntaVO();
	    }
	}
