import { PreguntaVO } from "./PreguntaVO";

	export class GrupoPreguntaVO
	{
		public  gppId : number;
		public  preguntaVO:PreguntaVO;
		public  resId :number;		
		
     	/**
	    * Constructor de la clase.
	    */
	    public constructor()
	    {
	    	this.preguntaVO = new PreguntaVO();
	    }
	}
