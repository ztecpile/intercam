import { PreguntaVO } from "./PreguntaVO";

	export class SeccionVO
	{
		public  secId : Number;
		public  secDescripcion:String;	
		public  preguntasVO : Set <PreguntaVO>;
		public  secOrden : Number;
        public  enable : Boolean = true;
						
     	/**
	    * Constructor de la clase.
	    */
	    public constructor()
	    {
	    	 //this.preguntasVO = new ArrayCollection();
	    }
	}
