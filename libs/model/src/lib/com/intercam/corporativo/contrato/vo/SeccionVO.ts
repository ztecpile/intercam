import { PreguntaVO } from "./PreguntaVO";

	export class SeccionVO
	{
		public  secId : number;
		public  secDescripcion:string;	
		public  preguntasVO : PreguntaVO[];
		public  secOrden : number;
        public  enable : boolean = true;
						
     	/**
	    * Constructor de la clase.
	    */
	    public constructor()
	    {
	    	 //this.preguntasVO = new ArrayCollection();
	    }
	}
