import { SeccionVO } from "./SeccionVO";

	export class TipoSeccionVO
	{
		public  sectId : Number;
		public  tsecOrden : Number;
		/* public  tipoCuestionarioVO : TipoCuestionarioVO;
		public  seccionesVO :ArrayCollection;	 */
		public  seccionVO:SeccionVO;

	
	
     	/**
	    * Constructor de la clase.
	    */
	    public constructor()
	    {
		    this.seccionVO = new SeccionVO();
		    //seccionesVO = new ArrayCollection();
	    }
	}
